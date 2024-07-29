/* eslint-disable prettier/prettier */

import { IsEmail, IsNotEmpty, IsOptional, IsString, IsStrongPassword, MinLength } from "class-validator";
import { EmailUnico } from "../validacao/email-unico.validator";

export class AtualizaUsuarioDTO{
    @IsString()
    @IsNotEmpty({ message: 'O nome não pode ser vazio.'})
    @IsOptional()
    nome: string;

    @IsEmail(undefined, { message: 'O e-mail informado é inválido.'})
    @EmailUnico({ message: "E-mail já cadastrado"})
    @IsOptional()
    email: string;

    @MinLength(6, { message: 'A senha deve ter pelo menos 6 caracteres.'})
    @IsStrongPassword(null, { message: 'A senha não é forte o suficiente.'})
    @IsOptional()
    senha: string;
}