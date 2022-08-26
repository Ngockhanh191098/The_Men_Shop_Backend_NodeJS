const authSocial = require("express").Router();
const passport = require("passport");

authSocial.get("/login/success", (req, res) => {
	console.log(req.user);
	if (req.user) {
		res.status(200).json({
			error: false,
			message: "Successfully Loged In",
			user: req.user,
		});
	} else {
		res.status(403).json({ error: true, message: "Not Authorized" });
	}
});

authSocial.get("/login/failed", (req, res) => {
	res.status(401).json({
		error: true,
		message: "Log in failure",
	});
});

authSocial.get("/google", passport.authenticate("google", ["profile", "email"]));

authSocial.get("/google/callback",passport.authenticate("google", {
		successRedirect: "http://localhost:3000",
		failureRedirect: "/login/failed",
	})
);

authSocial.get("/logout", (req, res) => {
	req.logout();
	res.redirect("http://localhost:3000");
});

module.exports = authSocial;
