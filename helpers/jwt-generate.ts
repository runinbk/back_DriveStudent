import jwt from 'jsonwebtoken';

const JWTgenerate = (uid: string = ''): Promise<string> => {
  return new Promise((resolve, reject) => {
    const payload = { uid };

    jwt.sign(
      payload,
      process.env.SECRETORPRIVATEKEY as string,
      {
        expiresIn: '4h',
      },
      (err, token) => {
        if (err) {
          console.log(err);
          reject('No se pudo generar el token');
        } else {
          if (token) {
            resolve(token);
          } else {
            reject('El token es indefinido');
          }
        }
      }
    );
  });
};

export {
  JWTgenerate,
};
