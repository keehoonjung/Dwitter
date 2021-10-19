const AUTH_ERROR = { message: "Authentication Error" };

export const isAuth = async (req, res, next) => {
  const authHeader = req.get("Authorization");
  if (!(authHeader && authHeader.statsWith("Bearer "))) {
    return res.status(401).json(AUTH_ERROR);
  }
};
