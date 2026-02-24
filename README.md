# File Upload API

Uma API REST robusta para upload, download e gerenciamento de arquivos com autenticação e validação.

## 🚀 Funcionalidades

- **Upload de Arquivos**: Upload com geração automática de nomes únicos (UUID)
- **Download de Arquivos**: Acesso direto aos arquivos via URL
- **Exclusão de Arquivos**: Remoção segura de arquivos
- **Autenticação**: Sistema de autenticação via Bearer token
- **Validação**: Validação de tipos e tamanhos de arquivo
- **Documentação**: Swagger UI integrado
- **Logs**: Sistema de logging estruturado com Winston

## 📋 Requisitos

- Node.js 14+
- npm ou yarn

## 🛠️ Instalação

1. Clone o repositório:
```bash
git clone <repository-url>
cd chat-media-bucket
```

2. Instale as dependências:
```bash
npm install
```

3. Configure as variáveis de ambiente:
```bash
cp .env.example .env
```

4. Edite o arquivo `.env` com suas configurações:
```env
PORT=3000
BASE_URL=http://localhost:3000
VOLUME_PATH=uploads
AUTH_TOKEN=your-secret-token-here
LOG_LEVEL=info
```

## 🚀 Execução

### Desenvolvimento
```bash
npm start
```

### Produção
```bash
NODE_ENV=production npm start
```

## 📚 Documentação da API

Acesse a documentação interativa em: `http://localhost:3000/docs`

### Endpoints

#### 1. Upload de Arquivo
```http
POST /upload
Authorization: Bearer your-token
Content-Type: multipart/form-data

file: [arquivo]
```

**Resposta de Sucesso:**
```json
{
  "filePath": "http://localhost:3000/files/123e4567-e89b-12d3-a456-426614174000.jpg",
  "filename": "123e4567-e89b-12d3-a456-426614174000.jpg",
  "originalname": "photo.jpg",
  "size": 2048576,
  "mimetype": "image/jpeg"
}
```

#### 2. Download de Arquivo
```http
GET /files/{filename}
```

**Resposta:** Arquivo binário com headers apropriados

#### 3. Exclusão de Arquivo
```http
DELETE /delete?filename={filename}
Authorization: Bearer your-token
```

**Resposta de Sucesso:**
```json
{
  "message": "File successfully deleted",
  "filename": "123e4567-e89b-12d3-a456-426614174000.jpg",
  "size": 2048576
}
```

## 📁 Tipos de Arquivo Suportados

- **Imagens**: JPEG, PNG, GIF, WebP
- **Texto**: plain, html, css, javascript, csv, xml, markdown
- **Application**: json, xml, pdf, zip, office formats, binary e form-urlencoded
- **Imagem**: png, jpeg, gif, svg, webp, bmp, ico, tiff
- **Áudio**: mpeg, wav, ogg, webm, aac
- **Vídeo**: mp4, mpeg, webm, ogg, avi, mov
- **Multipart, Font, Message e Model**: tipos MIME aceitos para compatibilidade

Lista completa: `src/config/allowedMimeTypes.js`

## ⚠️ Limitações

- **Tamanho máximo**: 10MB por arquivo
- **Quantidade**: 1 arquivo por requisição
- **Autenticação**: Bearer token obrigatório (exceto download)

## 🔧 Configuração

### Variáveis de Ambiente

| Variável | Descrição | Padrão |
|----------|-----------|--------|
| `PORT` | Porta do servidor | `3000` |
| `BASE_URL` | URL base da API | `http://localhost:3000` |
| `VOLUME_PATH` | Pasta de armazenamento | `uploads` |
| `AUTH_TOKEN` | Token de autenticação | **Obrigatório** |
| `LOG_LEVEL` | Nível de logging | `info` |

### Estrutura de Pastas

```
chat-media-bucket/
├── src/
│   ├── app.js              # Aplicação principal
│   ├── routes/
│   │   └── files.js        # Rotas de arquivos
│   ├── middleware/
│   │   ├── errorHandler.js # Tratamento de erros
│   │   └── validation.js   # Validações
│   └── config/
│       ├── environment.js  # Configurações
│       └── logger.js       # Sistema de logs
├── uploads/                # Arquivos armazenados
├── logs/                   # Arquivos de log
└── package.json
```

## 📊 Logs

Os logs são estruturados em JSON e incluem:

- **Arquivo**: `logs/combined.log` (todos os logs)
- **Erros**: `logs/error.log` (apenas erros)
- **Console**: Logs coloridos para desenvolvimento

### Exemplo de Log
```json
{
  "level": "info",
  "message": "File uploaded successfully",
  "timestamp": "2024-01-15T10:30:00.000Z",
  "service": "bucket-api",
  "filename": "123e4567-e89b-12d3-a456-426614174000.jpg",
  "originalname": "photo.jpg",
  "size": 2048576,
  "mimetype": "image/jpeg"
}
```

## 🔒 Segurança

- **Autenticação**: Bearer token obrigatório
- **Validação**: Tipos de arquivo restritos
- **Sanitização**: Nomes de arquivo gerados automaticamente
- **Logs**: Registro de todas as operações

## 🚨 Tratamento de Erros

A API retorna códigos de status HTTP apropriados:

- `200`: Sucesso
- `400`: Erro de validação
- `401`: Não autorizado
- `403`: Acesso negado
- `404`: Arquivo não encontrado
- `413`: Arquivo muito grande
- `500`: Erro interno

### Exemplo de Erro
```json
{
  "error": "File not found",
  "message": "The specified file does not exist"
}
```

## 🧪 Testes

Para testar a API:

1. **Via Swagger UI**: Acesse `http://localhost:3000/docs`
2. **Via cURL**:
```bash
# Upload
curl -X POST http://localhost:3000/upload \
  -H "Authorization: Bearer your-token" \
  -F "file=@/path/to/file.jpg"

# Download
curl http://localhost:3000/files/filename.jpg

# Delete
curl -X DELETE "http://localhost:3000/delete?filename=filename.jpg" \
  -H "Authorization: Bearer your-token"
```

## 📝 Licença

MIT License - veja o arquivo [LICENSE](LICENSE) para detalhes.

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📞 Suporte

Para suporte, envie um email para support@example.com ou abra uma issue no GitHub. 
