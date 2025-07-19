-- CreateTable
CREATE TABLE "concesiones" (
    "id" SERIAL NOT NULL,
    "edicion" VARCHAR(255),
    "fecha" VARCHAR(255),
    "link" VARCHAR(255),
    "procesado" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "concesiones_pkey" PRIMARY KEY ("id")
);
