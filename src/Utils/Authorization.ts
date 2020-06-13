import * as jwt from "jsonwebtoken";
import {BadRequestError, UnauthorizedError} from "routing-controllers";

const jwtSalt = "someRandomString";
const jwtExpirySeconds = 3600;

export class Authorization {
    public static sign(payload: any): string {
        return jwt.sign(payload, jwtSalt, {
            algorithm: "HS256",
            expiresIn: jwtExpirySeconds,
        });
    }

    public static verify(token: string): any {
        try {
            return jwt.verify(token, jwtSalt);
        } catch (e) {
            if (e instanceof jwt.JsonWebTokenError)  throw new UnauthorizedError();
            throw new BadRequestError();
        }
    }
}