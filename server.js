const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const { URL } = require('node:url');

const ROOT = __dirname;
const PORT = Number(process.env.PORT || 3000);

function sendJson(res, statusCode, data) {
  res.writeHead(statusCode, {
    'Content-Type': 'application/json; charset=utf-8',
    'Cache-Control': 'no-store',
  });
  res.end(JSON.stringify(data));
}

function serveFile(res, filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const types = {
    '.html': 'text/html; charset=utf-8',
    '.css': 'text/css; charset=utf-8',
    '.js': 'application/javascript; charset=utf-8',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.webp': 'image/webp',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon',
    '.json': 'application/json; charset=utf-8',
  };

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('Not found');
      return;
    }

    res.writeHead(200, {
      'Content-Type': types[ext] || 'application/octet-stream',
      'Cache-Control': ext === '.html' ? 'no-store' : 'public, max-age=3600',
    });
    res.end(data);
  });
}

function normalizeText(value) {
  return String(value || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}

function pick(list, key) {
  if (!list.length) return '';
  const index = Math.abs(
    Array.from(String(key || '')).reduce((acc, char) => acc + char.charCodeAt(0), 0)
  ) % list.length;
  return list[index];
}

function localAnswer(message) {
  const q = normalizeText(message);
  const opening = pick([
    'Claro.',
    'Perfeito.',
    'Entendi.',
    'Vou te explicar de um jeito simples.',
  ], q);
  const closing = pick([
    'Se quiser, eu também posso comparar com os outros produtos.',
    'Se quiser, eu posso te passar um resumo ainda mais direto.',
    'Se preferir, eu separo por produto e te mostro ponto a ponto.',
  ], q);

  if (/ola|oi|bom dia|boa tarde|boa noite|e ai|tizeria/.test(q)) {
    return 'Oi! Eu sou a TizerIA e posso te ajudar com os produtos, a entrega, o pagamento e as diferencas entre as opcoes do site.';
  }

  if (/entrega|frete|envio|recebe/.test(q)) {
    return `${opening} A entrega e feita apenas para Curitiba e regiao, e o pagamento e na entrega. ${closing}`;
  }

  if (/pagamento|pagar|pago/.test(q)) {
    return 'O pagamento e na entrega, sem complicacao.';
  }

  if (/produto|produtos|marca|marcas|opcao|opcoes|qual.*melhor|compar/.test(q)) {
    return `${opening} Temos opcoes para emagrecimento (Tirzepatida 60mg, Tirzepatida 60mg/3mL em solucao, Retatrutida 50mg e 120mg), composicao corporal (AOD-9604 e Tesamorelin) e pele e regeneracao (GHK-Cu 100mg e o blend GLOW 70mg). Posso comparar por perfil, origem e objetivo de uso.`;
  }

  if (/tirzepatida|benefic|apetite|saciedade|emagrec/.test(q)) {
    return `${opening} A tirzepatida ajuda no controle de apetite, aumenta a saciedade, contribui para o emagrecimento e pode melhorar a sensibilidade a insulina. O ideal e usar com acompanhamento profissional de saude.`;
  }

  if (/retatrutida/.test(q)) {
    return `${opening} A Retatrutida 50mg e a opcao de foco metabolico mais avancado do site, com proposta de maior impacto em controle de apetite e emagrecimento.`;
  }

  if (/ghk|ghk-cu|cobre|colageno|pele|capilar/.test(q)) {
    return `${opening} O GHK-Cu 100mg e voltado para regeneracao celular, colageno, pele e saude capilar, sendo a opcao mais ligada a estetica e vitalidade.`;
  }

  if (/efeito|colateral|nausea|enjoo|mal/.test(q)) {
    return `${opening} Os efeitos mais comuns relatados sao nausea leve, alteracao do apetite e desconforto digestivo nas primeiras semanas. Costumam diminuir com a adaptacao.`;
  }

  if (/seguro|seguranca|contraindic|gestante|lactante|diabetico/.test(q)) {
    return `${opening} A tirzepatida exige acompanhamento medico. Ela nao substitui consulta profissional e e contraindicada para gestantes, lactantes, diabeticos tipo 1 e menores de 18 anos.`;
  }

  if (/tempo|resultado|quando vejo/.test(q)) {
    return `${opening} A maioria das pessoas nota reducao do apetite ja na primeira semana. Os resultados mais consistentes costumam aparecer ao longo das primeiras semanas de uso, sempre com acompanhamento.`;
  }

  if (/frasco|caneta|liofiliz|solucao/.test(q)) {
    return `${opening} A caneta pronta vem em solucao liquida. O frasco liofilizado vem em po e e mais estavel antes da diluicao, oferecendo mais flexibilidade no manuseio.`;
  }

  if (/como funciona|como e|me explica|me fala|quero saber/.test(q)) {
    return `${opening} Eu posso te explicar os produtos, a entrega em Curitiba e regiao, o pagamento na entrega e qual opcao combina mais com o que voce procura. ${closing}`;
  }

  return `${opening} Posso ajudar com produtos, entrega, pagamento na entrega, tirzepatida, retatrutida, AOD-9604, tesamorelin, GHK-Cu e GLOW. Se quiser, me diga em poucas palavras o que voce quer saber.`;
}

async function handleChat(req, res) {
  let body = '';
  req.on('data', chunk => {
    body += chunk;
    if (body.length > 1_000_000) req.destroy();
  });

  req.on('end', () => {
    try {
      const payload = JSON.parse(body || '{}');
      const message = String(payload.message || '').trim();

      if (!message) {
        sendJson(res, 400, { error: 'Mensagem vazia' });
        return;
      }

      sendJson(res, 200, { text: localAnswer(message) });
    } catch (err) {
      sendJson(res, 500, { error: err.message || 'Erro interno' });
    }
  });
}

const server = http.createServer((req, res) => {
  const parsedUrl = new URL(req.url, `http://${req.headers.host}`);
  const pathname = decodeURIComponent(parsedUrl.pathname);

  if (req.method === 'POST' && pathname === '/api/chat') {
    handleChat(req, res);
    return;
  }

  const safePath = pathname === '/' ? '/index.html' : pathname;
  const filePath = path.normalize(path.join(ROOT, safePath));
  if (!filePath.startsWith(ROOT)) {
    res.writeHead(403, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('Forbidden');
    return;
  }

  serveFile(res, filePath);
});

server.listen(PORT, () => {
  console.log(`TizerpatidaCuritiba rodando em http://localhost:${PORT}`);
});
