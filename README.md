# Automatización QA - Sauce Demo (Playwright + Cucumber)

## Descripción
Este proyecto contiene una suite de pruebas automatizadas para la aplicación web **Sauce Demo**, implementada utilizando **Playwright** y **Cucumber (BDD)**.

El objetivo es validar el flujo principal de compra de un usuario, desde el login hasta la visualización de productos en el carrito.

---

## Tecnologías utilizadas

- Playwright
- Cucumber (Gherkin)
- TypeScript
- Node.js

---

## Estructura del proyecto

Reto Front/
│
├── src/
│   └── test/
│       ├── POM/
│       │   ├── pages/
│       │   ├── locators/
│       │   ├── steps/
│       │   └── hooks.ts
│       │
│       └── resources/
│           └── features/
│
├── reports/
├── generate-report.js
├── package.json
└── README.md

---

## Patrón de diseño aplicado

Se implementó el patrón **Page Object Model (POM)**, el cual permite:

- Separar la lógica de negocio de la UI
- Reutilizar código
- Mejorar la mantenibilidad
- Facilitar la escalabilidad de las pruebas

---

## Criterios de aceptación cubiertos

1. ✔️ Login exitoso con credenciales válidas  
2. ✔️ Login fallido con usuario bloqueado  
3. ✔️ Agregar productos al carrito  
4. ✔️ Visualizar productos en el carrito  
5. ✔️ Flujo básico de compra  

---

## Escenarios implementados

- Login exitoso
- Login fallido (locked_out_user)
- Agregar producto al carrito
- Validación de producto en carrito

---

## Prerrequisitos

Antes de ejecutar el proyecto, asegúrate de tener instalado:

- Node.js (versión 16 o superior)
- npm (gestor de paquetes de Node)

---

## Ejecución rápida

```bash
npm install  
npx playwright install  
npm test  
npm run report

## Instalación

1. Clonar el repositorio:

```bash
git clone <URL_DEL_REPOSITORIO>
cd Reto-Front

2. Instalar dependencias
```bash
npm install

3. Instalar navegadores de Playwright
```bash
npx playwright install

## Ejecución de pruebas

```bash
npm test

## Generación de reportes

1. Ejecutar las pruebas (genera archivo JSON)

```bash
npm test

2. Generar el reporte HTML

```bash
npm run report