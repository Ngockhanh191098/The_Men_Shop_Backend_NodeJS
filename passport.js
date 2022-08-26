const GoogleStrategy = require("passport-google-oauth20").Strategy;
const passport = require("passport");

passport.use(
	new GoogleStrategy(
		{
			clientID: "164008842210-nobov65fv1qnaklv1lhaara37u20ti82.apps.googleusercontent.com",
			clientSecret: "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",
			callbackURL: "http://localhost:5000/auth/google/callback",
			scope: ["profile", "email"],
		},
		function (accessToken, refreshToken, profile, callback) {
			callback(null, profile);
		}
	)
);

passport.serializeUser((user, done) => {
	done(null, user);
});

passport.deserializeUser((user, done) => {

	done(null, user);
});
