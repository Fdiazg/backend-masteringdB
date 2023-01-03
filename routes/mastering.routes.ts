import { Request, Response, Router } from "express";
import { Mastering } from "../models/mastering.model";

const masteringRoutes = Router();

masteringRoutes.get("/", async (req: Request, res: Response) => {
  const mastering = await Mastering.find();

  return res.json({
    ok: true,
    mastering,
  });
});

masteringRoutes.get("/paging", async (req: Request, res: Response) => {

    let perPage = 10;
    let page = Number(req.query.page) || 1;
    let skip = page -1;
    skip = skip * perPage;

    const mastering = await Mastering.find().skip(skip).limit(perPage);

    return res.json({
        ok: true,
        mastering
    })

});

masteringRoutes.post("/", (req: Request, res: Response) => {
  const body = req.body;

  const mastering = {
    artista: body.artista,
    nombreLanzamiento: body.nombreLanzamiento,
    discoTipo: body.discoTipo,
    fechaLanzamiento: body.fechaLanzamiento,
    portada: body.portada,
  };

  Mastering.create(mastering)
    .then((masteringDb) => {
      return res.json({
        ok: true,
        masteringDb,
      });
    })
    .catch((err) => {
      return res.json({
        ok: false,
        err,
      });
    });
});

masteringRoutes.put("/:id", (req: Request, res: Response) => {
  const masteringId = req.params.id;

  const body = req.body;

  const mastering = {
    artista: body.artista,
    nombreLanzamiento: body.nombreLanzamiento,
    discoTipo: body.discoTipo,
    fechaLanzamiento: body.fechaLanzamiento,
    portada: body.portada,
  };

  Mastering.findByIdAndUpdate(masteringId, mastering).then((masteringDb) => {
    return res.json({
      ok: true,
      masteringDb,
    });
  });
});

masteringRoutes.delete("/", async (req: Request, res: Response) => {
  const masteringId = req.query.id;

  if (!masteringId) {
    return res.json({
      ok: false,
      msj: "Registro no existe",
    });
  }

  await Mastering.findByIdAndDelete(masteringId)
    .then((mastering) => {
      return res.json({
        ok: true,
        msj: "Eliminado correctamente",
      });
    })
    .catch((err) => {
      return res.json({
        ok: false,
        msj: "Registro no existe",
      });
    });
});

export default masteringRoutes;
