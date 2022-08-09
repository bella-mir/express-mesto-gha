const BAD_REQUEST = 400;
const NOT_FOUND = 404;
const INTERNAL_SERVER_ERROR = 500;
const CONFLICT_ERROR = 409;
const UNAUTHORIZED = 401;
const FORBIDDEN = 403;

const errorMessage = (err, req, res) => {
  if (err.name === 'CastError') {
    res.status(BAD_REQUEST).send({ message: 'Переданы некорректные данные' });
    return;
  }
  if (err.name === 'ValidationError') {
    res.status(BAD_REQUEST).send({ message: err.message });
    return;
  }
  if (err.name === 'DocumentNotFoundError') {
    res.status(NOT_FOUND).send({ message: 'Пользователь или карточка не найдены' });
    return;
  }
  if (err.name === 'OverwriteModelError') {
    res.status(CONFLICT_ERROR).send({ message: 'Пользователь с таким email уже существует' });
    return;
  }
  if (err.name === 'DocumentNotFoundError') {
    res.status(UNAUTHORIZED).send({ message: 'Вы не авторизованы' });
    return;
  }
  if (err.name === 'DocumentNotFoundError') {
    res.status(FORBIDDEN).send({ message: 'Вы не имеете прав на это действие' });
    return;
  }

  res.status(INTERNAL_SERVER_ERROR).send({ message: 'Внутренняя проблема сервера' });
};

module.exports = { errorMessage };
