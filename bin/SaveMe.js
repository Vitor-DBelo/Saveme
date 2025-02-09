#!/usr/bin/env node
import { program } from "commander";
import { currentDir } from "../src/index.js";
import ls from "../src/services/FileDirListServices.mjs";
import lsT from "../src/services/AllListScannerServices.mjs";
import copy from "../src/services/CopyServices.mjs";

program
    .name('save-me')
    .description('*Save Me* é uma aplicação em JavaScript que cria cópias de segurança organizadas dos arquivos locais, salvando-os em diferentes locais do computador para evitar perda de dados.')
    .version('0.0.2');

program
    .command('init')
    .description('inicia o save-me')
    .action(async () => {
        const { init } = await import('../src/index.js');  
        await init();
    });

program
    .command('ls')
    .description('lista arquivos e subdiretórios')
    .action(() => {
        ls(currentDir);
    });

program
    .command('lsT')
    .description('lista arquivos, subdiretórios e conteúdo interno')
    .action(() => {
        lsT(currentDir);
    });

program
    .command('copy')  
    .description('Copia o diretório para outro destino, salva por cima de arquivos, salva arquivo padrão')
    .action((caminho) => {
        copy(currentDir, caminho);
    });

program.parse();
