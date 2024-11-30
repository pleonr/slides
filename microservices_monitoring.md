---
src: ./cover.md
theme: default
class: text-center
highlighter: shiki
mdc: true
drawings:
  persist: false
image: /side-logo.png
selectable: true
colorSchema: dark
title: Microservices Monitoring
author: Pablo Leon Rodrigues
export:
  format: pdf
  timeout: 30000
  withClicks: false
---

---

<Toc columns="1" maxDepth="3"></Toc>

---

## Monitoramento de microsserviços

Monitoramento é o processo contínuo de coleta, análise e visualização de métricas para garantir que sistemas estejam funcionando corretamente. 

É uma forma eficaz de proativa para identificação de problemas, como erros durante a execução, downtime de serviços, garantia de SLAs(Service Legal Agreements) e identificação de pontos de melhoria no sistema.

Dentre os conceitos fundamentais podemos destacar, Métricas, Logs, Tracing, Observabilidade.


<div>
  <img class="m-auto -z-5 bottom-0 right-0 left-0 max-w-75 absolute" style="background-color: white" src="/public/Datadog_logo.png"/>
  <img class="m-auto -z-5 bottom-0 right-0 max-w-75 absolute" style="background-color: white" src="/graphana.png"/>
  <img class="m-auto -z-5 bottom-45 right-0 max-w-60 absolute" style="background-color: white" src="/new_relic.png"/>
  <img class="m-auto -z-5 bottom-0 left-0 max-w-70 absolute" style="background-color: white" src="/prometheus.png"/>
</div>

---
layout: two-cols
---

### Métricas {style="color: green;"}

Indicadores quantitativos sobre desempenho e saúde de um sistema.

- Latência (tempo de resposta de uma API)
- Taxa de erros e sucessos
- Uso de recursos CPU/memória, disco, rede
- Taxa de requisições (RPS - Requests per Second)

Ferramentas: Prometheus, Datadog, New Relic.

### Tracing {style="color: green;"}

Rastreio de requisições através de múltiplos serviços, sendo uma ferramenta importante para entender o fluxo do sistema e identificar gargalos.

Ferramentas: Jaeger, OpenTelemetry, Zipkin.

::right::

### Logs {style="color: green;"}

Registros detalhados de eventos que ocorrem no sistema

- Logs de acesso (HTTP)
- Logs de aplicação (ex.: exceções, mensagens do sistema)
- Logs de sistema (ex.: kernel, infraestrutura)

Ferramentas: ELK Stack (Elasticsearch, Logstash, Kibana), Fluentd.

### Alertas {style="color: green;"}

Configuração de notificações baseadas em eventos anormais ou limiares de métricas.

Ferramentas: PagerDuty, Grafana Alerting.

---

### Winston

[Winston](https://www.npmjs.com/package/winston) é uma ferramenta universal de logs, suporta diferentes transportes de logs (console, arquivos, serviços externos como Loggly).

Configuração flexível para níveis de logs (info, error, debug, etc.), integração com JSON, ideal para sistemas que consomem logs estruturados.

```shell
npm install winston
npm install @types/winston --save-dev
```

---

```typescript
import { createLogger, format, transports } from 'winston';

const logger = createLogger({
  level: 'info', // Define o nível padrão
  format: format.combine(
    format.timestamp(), // Adiciona timestamp
    format.json() // Formato JSON para os logs
  ),
  transports: [
    new transports.Console(), // Exibe no console
    new transports.File({ filename: 'logs/error.log', level: 'error' }),
    new transports.File({ filename: 'logs/combined.log' })
  ],
});

export default logger;
```

---


```typescript
import express, { Request, Response, NextFunction } from 'express';
import logger from './logger';
const app = express();
// Middleware para logar requisições
app.use((req: Request, res: Response, next: NextFunction) => {
  logger.info(`${req.method} ${req.url}`);
  next();
});
// Tratamento de erros
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  logger.error(`Erro: ${err.message}`);
  res.status(500).send('Algo deu errado!');
});
const PORT = 3000;
app.listen(PORT, () => {
  logger.info(`Servidor rodando na porta ${PORT}`);
});
```

<!--
Ambientes diferentes: Use níveis de log diferentes para desenvolvimento (debug) e produção (info ou error).
Logs estruturados: Sempre inclua informações adicionais, como IDs de requisição, para rastreamento mais fácil.
Transporte para serviços externos: Integre com ferramentas como AWS CloudWatch, ElasticSearch, ou Loggly, se necessário.

// Rota de exemplo
app.get('/', (req: Request, res: Response) => {
  logger.info('Rota principal acessada');
  res.send('Hello, World!');
});
-->

--- 

https://betterstack.com/community/guides/logging/how-to-install-setup-and-use-winston-and-morgan-to-log-node-js-applications/

https://grafana.com/docs/grafana/latest/setup-grafana/installation/docker/
