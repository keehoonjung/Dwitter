import jwt from "jsonwebtoken";

const AUTH_ERROR = { message: "Authentication Error" };

export const isAuth = async (req, res, next) => {
  const authHeader = req.get("Authorization");
  if (!(authHeader && authHeader.statsWith("Bearer "))) {
    return res.status(401).json(AUTH_ERROR);
  }

  const token = authHeader.split(" ")[1];
  jwt.verify(
    token,
    "KMduSUkyCVrT0WWWE!rlqzH2rOxK^li8",
    async (error, decoded) => {
      if (error) {
        return res.status(401).json(AUTH_ERROR);
      }
    }
  );
};
