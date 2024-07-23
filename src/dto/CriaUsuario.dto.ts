/* eslint-disable prettier/prettier */

import { IsEmail, IsNotEmpty, IsString, IsStrongPassword, MinLength } from "class-validator";

export class CriaUsuarioDTO{
    @IsString()
    @IsNotEmpty({ message: 'O nome não pode ser vazio.'})
    nome: string;

    @IsEmail(undefined, { message: 'O e-mail informado é inválido.'})
    email: string;

    @MinLength(6, { message: 'A senha deve ter pelo menos 6 caracteres.'})
    @IsStrongPassword(null, { message: 'A senha não é forte o suficiente.'})
    senha: string;
}