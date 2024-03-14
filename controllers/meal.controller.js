const { Meal, Reservation } = require("../utils/db");

// GET reservation of the UserCurrent
exports.allMeals = (req, res) => {
  Meal.findAll({
    where: { reservationId: req.body.reservationId },
    include: [{ model: Reservation }],
  })
    .then((reservations) => {
      console.log(reservations);
      res.status(200).json({ reservations });
    })
    .catch((error) => res.status(422).json({ message: error }));
};

// Post
exports.addMeal = (req, res) => {
  const { title } = req.body;
  const { content } = req.body;
  const { category } = req.body;
  const { price } = req.body;
  const { quantity } = req.body;
  const { reservationId } = req.body;

  Meal.create({
    title,
    content,
    category,
    price,
    quantity,
    reservationId,
  })
    .then((addMeal) => {
      if (
        typeof title !== "string" ||
        typeof content !== "string" ||
        typeof category !== "string"
      )
        return res
          .status(422)
          .json({ error: "Les données du plats fourni ne sont pas correcte." });
      if (typeof price !== "number")
        return res
          .status(422)
          .json({ error: "Le prix rentrée n'est pas exacte." });
      if (typeof quantity !== "number" || !Number.isInteger(quantity))
        return res
          .status(422)
          .json({ error: "La quantité donnée n'est pas correcte." });
      return res.status(200).json({ "Meal enregistrée": addMeal });
    })
    .catch((error) => {
      console.error(error);
      return res.status(422).json({ message: "Error" });
    });
};

// Put
exports.updateMeal = (req, res) => {
  const { title } = req.body;
  const { content } = req.body;
  const { category } = req.body;
  const { price } = req.body;
  const { quantity } = req.body;
  const { reservationId } = req.body;

  Meal.update(
    {
      title,
      content,
      category,
      price,
      quantity,
      reservationId,
    },
    { where: { id: req.body.id } },
  )
    .then((addMeal) => {
      if (
        typeof title !== "string" ||
        typeof content !== "string" ||
        typeof category !== "string"
      )
        return res
          .status(422)
          .json({ error: "Les données du plats fourni ne sont pas correcte." });
      if (typeof price !== "number")
        return res
          .status(422)
          .json({ error: "Le prix rentrée n'est pas exacte." });
      if (typeof quantity !== "number" || !Number.isInteger(quantity))
        return res
          .status(422)
          .json({ error: "La quantité donnée n'est pas correcte." });
      return res.status(200).json({ "Meal enregistrée": addMeal });
    })
    .catch((error) => {
      console.error(error);
      return res.status(422).json({ message: "Error" });
    });
};

// Delete
exports.deleteMeal = (req, res, next) => {
  Meal.destroy({
    where: { reservationId: req.body.reservationId },
  })
    .then((addMeal) => {
      console.log(addMeal);
      res.status(200).json({ message: "Meal delete" });
      next();
    })
    .catch((error) => {
      console.error(error);
      res.status(404).json({ message: "Not found" });
    });
};
