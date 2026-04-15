import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, VerifyCallback } from 'passport-google-oauth20';
import { ConfigService } from '@nestjs/config';
import { UsersService } from '../../users/users.service';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor(
    config: ConfigService,
    private usersService: UsersService,
  ) {
    super({
      clientID: config.get<string>('GOOGLE_CLIENT_ID')!,
      clientSecret: config.get<string>('GOOGLE_CLIENT_SECRET')!,
      callbackURL: config.get<string>('GOOGLE_CALLBACK_URL')!,
      scope: ['email', 'profile'],
    } as any);
  }

  async validate(
    _accessToken: string,
    _refreshToken: string,
    profile: any,
    done: VerifyCallback,
  ) {
    const { id, displayName, emails, photos } = profile;
    const email = emails[0].value;

    let user = await this.usersService.findByGoogleId(id);

    if (!user) {
      user = await this.usersService.findByEmail(email);
      if (user) {
        await this.usersService.updateProfile(user._id.toString(), { googleId: id });
      } else {
        user = await this.usersService.create({
          googleId: id,
          name: displayName,
          email,
          avatar: photos?.[0]?.value ?? '',
        });
      }
    }

    done(null, user);
  }
}
