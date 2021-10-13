module.exports = (err, req, res, next) => {
  const env = process.env.NODE_ENV || 'development';

  if (err.name === 'SequelizeValidationError') {
    if (env === 'development') {
      return res.status(400).json({
        status: 'fail',
        errors: err.errors
      });
    } else if (env === 'production') {
      return res.status(400).json({
        status: 'fail',
        errors: err.errors.map(error => ({ [error.path]: error.message }))
      });
    }
  } else {
    if (env === 'development') {
      return res.status(500).json({message: err.message,
      stack: err.stack});
    } else if (env === 'production') {
      return res.status(500).send('Something Went Wrong!');
    }
  }
};
