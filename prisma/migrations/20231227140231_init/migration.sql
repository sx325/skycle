-- CreateTable
CREATE TABLE "versions"
(
    "id"            TEXT         NOT NULL,
    "ownerDid"      TEXT         NOT NULL,
    "ownerHandle"   VARCHAR(255) NOT NULL,
    "generatedData" TEXT         NOT NULL,
    "createdAt"     TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "versions_pkey" PRIMARY KEY ("id")
);
