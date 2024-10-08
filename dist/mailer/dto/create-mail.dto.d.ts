import { Address } from 'nodemailer/lib/mailer';
export declare class CreateMailDto {
    from?: Address;
    recipients: Address;
    subject: string;
    html: string;
    text?: string;
    placeHolderReplacement?: Record<string, string>;
}
