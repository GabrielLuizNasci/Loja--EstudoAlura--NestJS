/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { UsuarioController } from "./usario.controller";
import { UsuarioRepository } from "./usuario.repository";

@Module({
    controllers: [UsuarioController],
    providers: [UsuarioRepository]
})
export class UsuarioModule{}