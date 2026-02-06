import mailJet, { type Client } from "node-mailjet";

class MailService {
  private readonly MJ_ACCESS = process.env.MJ_ACCESS as string;
  private readonly MJ_SECRET = process.env.MJ_SECRET as string;

  private client: Client;

  constructor() {
    if (!this.MJ_ACCESS) {
      throw new Error("MJ_ACCESS is not defined");
    }

    if (!this.MJ_SECRET) {
      throw new Error("MJ_SECRET is not defined");
    }

    this.client = mailJet.apiConnect(this.MJ_ACCESS, this.MJ_SECRET);
  }

  sendVerificationMail = async (email: string, url: string) => {
    try {
      this.client.post("send", { version: "v3.1" }).request({
        Messages: [
          {
            From: {
              Email: "kcnpoow@formygoals.xyz",
              Name: "Email Verification",
            },
            To: [
              {
                Email: email,
              },
            ],
            Subject: "Verify Your Email",
            TextPart: `Please verify your email by clicking the link: ${url}`,
            HTMLPart: `<p>Please verify your email by clicking the link:</p><a href="${url}">${url}</a>`,
          },
        ],
      });
    } catch (error) {
      throw error;
    }
  };
}

export const mailService = new MailService();
