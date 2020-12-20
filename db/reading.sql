-- Table: public.reading

-- DROP TABLE public.reading;

CREATE TABLE public.reading
(
    sensor_id text COLLATE pg_catalog."default" NOT NULL,
    temp double precision NOT NULL,
    humi double precision NOT NULL,
    "time" timestamp with time zone NOT NULL,
    CONSTRAINT pkey PRIMARY KEY (sensor_id, "time")
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.reading
    OWNER to postgres;