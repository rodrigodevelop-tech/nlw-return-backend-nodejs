import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "c7b9fe94812c77",
    pass: "70b1f1f4df0fdf"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ body, subject }: SendMailData){
    await transport.sendMail({
      from: "Equipe Feedget <oi@feedget.com",
      to: "Rodrigo Alves <digoshames@gmail.com>",
      subject,
      html: body,
    });
  };
}