-- CreateTable
CREATE TABLE "Resoluciones" (
    "id" SERIAL NOT NULL,
    "link" VARCHAR(255),
    "categoria" VARCHAR(255),
    "descripcion" TEXT,
    "procesado" BOOLEAN NOT NULL DEFAULT false,
    "resumen" TEXT,

    CONSTRAINT "Resoluciones_pkey" PRIMARY KEY ("id")
);
