/*
  Warnings:

  - You are about to drop the `concesiones` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "concesiones";

-- CreateTable
CREATE TABLE "Concesiones" (
    "id" SERIAL NOT NULL,
    "edicion" VARCHAR(255),
    "fecha" VARCHAR(255),
    "link" VARCHAR(255),
    "procesado" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Concesiones_pkey" PRIMARY KEY ("id")
);
