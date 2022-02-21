"use strict";
/*****************************************
 * Emailing config variables
 *
 
 *****************************************/

export default {
    apiKey: process.env.EMAILING_API_KEY || "Contactoimm2022.",
    email: process.env.EMAILING_POSTMASTER || "contacto@kickoff2022imm.com",
    host: process.env.EMAILING_HOST || "smtp.hostinger.com",
    port: process.env.EMAILING_PORT || 465,
    from: process.env.EMAILING_FROM || '"Registro kickoff2022imm" <contacto@kickoff2022imm.com>', // sender address
    subject: process.env.EMAILING_SUBJECT || "Registro kickoff2022imm ✔", // Subject line
  };
  