--
-- PostgreSQL database dump
--

-- Dumped from database version 15.3
-- Dumped by pg_dump version 15.3

-- Started on 2023-06-21 00:02:28

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 217 (class 1259 OID 16654)
-- Name: brevet; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.brevet (
    id integer NOT NULL,
    numero integer NOT NULL,
    fech_emi date NOT NULL,
    fech_ven date NOT NULL,
    categoria character varying(1) NOT NULL,
    img_frontal character varying,
    img_reverso character varying,
    estado boolean DEFAULT true NOT NULL,
    id_usuario integer NOT NULL,
    "createdAt" timestamp with time zone,
    "updatedAt" timestamp with time zone
);


ALTER TABLE public.brevet OWNER TO postgres;

--
-- TOC entry 216 (class 1259 OID 16653)
-- Name: brevet_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.brevet_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.brevet_id_seq OWNER TO postgres;

--
-- TOC entry 3528 (class 0 OID 0)
-- Dependencies: 216
-- Name: brevet_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.brevet_id_seq OWNED BY public.brevet.id;


--
-- TOC entry 242 (class 1259 OID 16906)
-- Name: brevet_id_usuario_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.brevet_id_usuario_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.brevet_id_usuario_seq OWNER TO postgres;

--
-- TOC entry 3529 (class 0 OID 0)
-- Dependencies: 242
-- Name: brevet_id_usuario_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.brevet_id_usuario_seq OWNED BY public.brevet.id_usuario;


--
-- TOC entry 237 (class 1259 OID 16825)
-- Name: calificacion_comentario; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.calificacion_comentario (
    id integer NOT NULL,
    comentario character varying,
    calificacion character(1),
    id_usuario integer,
    id_soliviaje integer,
    id_carrera integer,
    "createdAt" timestamp with time zone,
    "updatedAt" timestamp with time zone,
    estado boolean
);


ALTER TABLE public.calificacion_comentario OWNER TO postgres;

--
-- TOC entry 236 (class 1259 OID 16824)
-- Name: calificacion_comentario_id_cal_com_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.calificacion_comentario_id_cal_com_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.calificacion_comentario_id_cal_com_seq OWNER TO postgres;

--
-- TOC entry 3530 (class 0 OID 0)
-- Dependencies: 236
-- Name: calificacion_comentario_id_cal_com_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.calificacion_comentario_id_cal_com_seq OWNED BY public.calificacion_comentario.id;


--
-- TOC entry 253 (class 1259 OID 17125)
-- Name: calificacion_comentario_id_carrera_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.calificacion_comentario_id_carrera_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.calificacion_comentario_id_carrera_seq OWNER TO postgres;

--
-- TOC entry 3531 (class 0 OID 0)
-- Dependencies: 253
-- Name: calificacion_comentario_id_carrera_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.calificacion_comentario_id_carrera_seq OWNED BY public.calificacion_comentario.id_carrera;


--
-- TOC entry 252 (class 1259 OID 17117)
-- Name: calificacion_comentario_id_soliviaje_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.calificacion_comentario_id_soliviaje_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.calificacion_comentario_id_soliviaje_seq OWNER TO postgres;

--
-- TOC entry 3532 (class 0 OID 0)
-- Dependencies: 252
-- Name: calificacion_comentario_id_soliviaje_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.calificacion_comentario_id_soliviaje_seq OWNED BY public.calificacion_comentario.id_soliviaje;


--
-- TOC entry 251 (class 1259 OID 17109)
-- Name: calificacion_comentario_id_usuario_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.calificacion_comentario_id_usuario_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.calificacion_comentario_id_usuario_seq OWNER TO postgres;

--
-- TOC entry 3533 (class 0 OID 0)
-- Dependencies: 251
-- Name: calificacion_comentario_id_usuario_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.calificacion_comentario_id_usuario_seq OWNED BY public.calificacion_comentario.id_usuario;


--
-- TOC entry 221 (class 1259 OID 16672)
-- Name: carac_espe; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.carac_espe (
    id integer NOT NULL,
    caracteristica character varying NOT NULL,
    estado boolean DEFAULT true NOT NULL,
    id_vehiculo integer NOT NULL,
    "createdAt" timestamp with time zone,
    "updatedAt" timestamp with time zone
);


ALTER TABLE public.carac_espe OWNER TO postgres;

--
-- TOC entry 220 (class 1259 OID 16671)
-- Name: carac_espe_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.carac_espe_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.carac_espe_id_seq OWNER TO postgres;

--
-- TOC entry 3534 (class 0 OID 0)
-- Dependencies: 220
-- Name: carac_espe_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.carac_espe_id_seq OWNED BY public.carac_espe.id;


--
-- TOC entry 245 (class 1259 OID 16966)
-- Name: carac_espe_id_vehiculo_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.carac_espe_id_vehiculo_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.carac_espe_id_vehiculo_seq OWNER TO postgres;

--
-- TOC entry 3535 (class 0 OID 0)
-- Dependencies: 245
-- Name: carac_espe_id_vehiculo_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.carac_espe_id_vehiculo_seq OWNED BY public.carac_espe.id_vehiculo;


--
-- TOC entry 229 (class 1259 OID 16739)
-- Name: carrera; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.carrera (
    id integer NOT NULL,
    estado_carrera boolean DEFAULT false,
    hora_p time without time zone,
    hora_d time without time zone,
    id_pasajero integer NOT NULL,
    id_conductor integer NOT NULL,
    "createdAt" timestamp with time zone,
    "updatedAt" timestamp with time zone,
    estado boolean
);


ALTER TABLE public.carrera OWNER TO postgres;

--
-- TOC entry 228 (class 1259 OID 16738)
-- Name: carrera_id_carrera_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.carrera_id_carrera_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.carrera_id_carrera_seq OWNER TO postgres;

--
-- TOC entry 3536 (class 0 OID 0)
-- Dependencies: 228
-- Name: carrera_id_carrera_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.carrera_id_carrera_seq OWNED BY public.carrera.id;


--
-- TOC entry 248 (class 1259 OID 17065)
-- Name: carrera_id_conductor_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.carrera_id_conductor_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.carrera_id_conductor_seq OWNER TO postgres;

--
-- TOC entry 3537 (class 0 OID 0)
-- Dependencies: 248
-- Name: carrera_id_conductor_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.carrera_id_conductor_seq OWNED BY public.carrera.id_conductor;


--
-- TOC entry 247 (class 1259 OID 17059)
-- Name: carrera_id_pasajero_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.carrera_id_pasajero_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.carrera_id_pasajero_seq OWNER TO postgres;

--
-- TOC entry 3538 (class 0 OID 0)
-- Dependencies: 247
-- Name: carrera_id_pasajero_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.carrera_id_pasajero_seq OWNED BY public.carrera.id_pasajero;


--
-- TOC entry 235 (class 1259 OID 16802)
-- Name: pago; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.pago (
    id integer NOT NULL,
    costo real,
    estado_pago boolean DEFAULT false NOT NULL,
    costo_total real NOT NULL,
    id_targeta integer,
    id_carrera integer,
    id_soli_viaje integer,
    estado boolean DEFAULT true,
    "createdAt" timestamp with time zone,
    "updatedAt" timestamp with time zone
);


ALTER TABLE public.pago OWNER TO postgres;

--
-- TOC entry 255 (class 1259 OID 24595)
-- Name: pago_id_carrera_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.pago_id_carrera_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.pago_id_carrera_seq OWNER TO postgres;

--
-- TOC entry 3539 (class 0 OID 0)
-- Dependencies: 255
-- Name: pago_id_carrera_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.pago_id_carrera_seq OWNED BY public.pago.id_carrera;


--
-- TOC entry 234 (class 1259 OID 16801)
-- Name: pago_id_pago_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.pago_id_pago_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.pago_id_pago_seq OWNER TO postgres;

--
-- TOC entry 3540 (class 0 OID 0)
-- Dependencies: 234
-- Name: pago_id_pago_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.pago_id_pago_seq OWNED BY public.pago.id;


--
-- TOC entry 256 (class 1259 OID 24600)
-- Name: pago_id_soli_viaje_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.pago_id_soli_viaje_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.pago_id_soli_viaje_seq OWNER TO postgres;

--
-- TOC entry 3541 (class 0 OID 0)
-- Dependencies: 256
-- Name: pago_id_soli_viaje_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.pago_id_soli_viaje_seq OWNED BY public.pago.id_soli_viaje;


--
-- TOC entry 254 (class 1259 OID 24590)
-- Name: pago_id_targeta_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.pago_id_targeta_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.pago_id_targeta_seq OWNER TO postgres;

--
-- TOC entry 3542 (class 0 OID 0)
-- Dependencies: 254
-- Name: pago_id_targeta_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.pago_id_targeta_seq OWNED BY public.pago.id_targeta;


--
-- TOC entry 241 (class 1259 OID 16891)
-- Name: preferencias; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.preferencias (
    id integer NOT NULL,
    preferencia character varying NOT NULL,
    estado boolean DEFAULT true,
    id_usuario integer NOT NULL,
    "createdAt" timestamp with time zone,
    "updatedAt" timestamp with time zone
);


ALTER TABLE public.preferencias OWNER TO postgres;

--
-- TOC entry 239 (class 1259 OID 16889)
-- Name: prefencias_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.prefencias_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.prefencias_id_seq OWNER TO postgres;

--
-- TOC entry 3543 (class 0 OID 0)
-- Dependencies: 239
-- Name: prefencias_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.prefencias_id_seq OWNED BY public.preferencias.id;


--
-- TOC entry 240 (class 1259 OID 16890)
-- Name: prefencias_id_usuario_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.prefencias_id_usuario_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.prefencias_id_usuario_seq OWNER TO postgres;

--
-- TOC entry 3544 (class 0 OID 0)
-- Dependencies: 240
-- Name: prefencias_id_usuario_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.prefencias_id_usuario_seq OWNED BY public.preferencias.id_usuario;


--
-- TOC entry 233 (class 1259 OID 16778)
-- Name: punto; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.punto (
    id integer NOT NULL,
    lat double precision NOT NULL,
    long double precision NOT NULL,
    nom_lugar character varying(50),
    estado boolean DEFAULT true,
    id_ruta integer,
    id_soli_viaje integer,
    id_carrera integer,
    "createdAt" timestamp with time zone,
    "updatedAt" timestamp with time zone
);


ALTER TABLE public.punto OWNER TO postgres;

--
-- TOC entry 259 (class 1259 OID 24634)
-- Name: punto_id_carrera_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.punto_id_carrera_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.punto_id_carrera_seq OWNER TO postgres;

--
-- TOC entry 3545 (class 0 OID 0)
-- Dependencies: 259
-- Name: punto_id_carrera_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.punto_id_carrera_seq OWNED BY public.punto.id_carrera;


--
-- TOC entry 232 (class 1259 OID 16777)
-- Name: punto_id_punto_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.punto_id_punto_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.punto_id_punto_seq OWNER TO postgres;

--
-- TOC entry 3546 (class 0 OID 0)
-- Dependencies: 232
-- Name: punto_id_punto_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.punto_id_punto_seq OWNED BY public.punto.id;


--
-- TOC entry 257 (class 1259 OID 24624)
-- Name: punto_id_ruta_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.punto_id_ruta_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.punto_id_ruta_seq OWNER TO postgres;

--
-- TOC entry 3547 (class 0 OID 0)
-- Dependencies: 257
-- Name: punto_id_ruta_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.punto_id_ruta_seq OWNED BY public.punto.id_ruta;


--
-- TOC entry 258 (class 1259 OID 24629)
-- Name: punto_id_soli_viaje_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.punto_id_soli_viaje_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.punto_id_soli_viaje_seq OWNER TO postgres;

--
-- TOC entry 3548 (class 0 OID 0)
-- Dependencies: 258
-- Name: punto_id_soli_viaje_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.punto_id_soli_viaje_seq OWNED BY public.punto.id_soli_viaje;


--
-- TOC entry 215 (class 1259 OID 16645)
-- Name: rols; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.rols (
    id integer NOT NULL,
    nombre_rol character varying NOT NULL,
    descripcion character varying,
    "createdAt" timestamp without time zone,
    "updatedAt" timestamp without time zone
);


ALTER TABLE public.rols OWNER TO postgres;

--
-- TOC entry 214 (class 1259 OID 16644)
-- Name: rol_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.rol_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.rol_id_seq OWNER TO postgres;

--
-- TOC entry 3549 (class 0 OID 0)
-- Dependencies: 214
-- Name: rol_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.rol_id_seq OWNED BY public.rols.id;


--
-- TOC entry 227 (class 1259 OID 16725)
-- Name: ruta; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.ruta (
    id integer NOT NULL,
    strpolyline character varying,
    estado_cap boolean,
    cant_pasajero character(1),
    estado boolean DEFAULT true NOT NULL,
    id_usuario integer NOT NULL,
    "createdAt" timestamp with time zone,
    "updatedAt" timestamp with time zone,
    hora_p time without time zone
);


ALTER TABLE public.ruta OWNER TO postgres;

--
-- TOC entry 226 (class 1259 OID 16724)
-- Name: ruta_id_ruta_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.ruta_id_ruta_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.ruta_id_ruta_seq OWNER TO postgres;

--
-- TOC entry 3550 (class 0 OID 0)
-- Dependencies: 226
-- Name: ruta_id_ruta_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.ruta_id_ruta_seq OWNED BY public.ruta.id;


--
-- TOC entry 246 (class 1259 OID 16997)
-- Name: ruta_id_usuario_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.ruta_id_usuario_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.ruta_id_usuario_seq OWNER TO postgres;

--
-- TOC entry 3551 (class 0 OID 0)
-- Dependencies: 246
-- Name: ruta_id_usuario_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.ruta_id_usuario_seq OWNED BY public.ruta.id_usuario;


--
-- TOC entry 231 (class 1259 OID 16759)
-- Name: solicitud_viaje; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.solicitud_viaje (
    id integer NOT NULL,
    strpolyline character varying,
    hora_p time without time zone,
    cant_pasajeros character(1),
    estado boolean DEFAULT true NOT NULL,
    id_usuario integer NOT NULL,
    id_ruta integer NOT NULL,
    "createdAt" timestamp with time zone,
    "updatedAt" timestamp with time zone
);


ALTER TABLE public.solicitud_viaje OWNER TO postgres;

--
-- TOC entry 250 (class 1259 OID 17090)
-- Name: solicitud_viaje_id_ruta_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.solicitud_viaje_id_ruta_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.solicitud_viaje_id_ruta_seq OWNER TO postgres;

--
-- TOC entry 3552 (class 0 OID 0)
-- Dependencies: 250
-- Name: solicitud_viaje_id_ruta_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.solicitud_viaje_id_ruta_seq OWNED BY public.solicitud_viaje.id_ruta;


--
-- TOC entry 230 (class 1259 OID 16758)
-- Name: solicitud_viaje_id_sol_viaje_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.solicitud_viaje_id_sol_viaje_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.solicitud_viaje_id_sol_viaje_seq OWNER TO postgres;

--
-- TOC entry 3553 (class 0 OID 0)
-- Dependencies: 230
-- Name: solicitud_viaje_id_sol_viaje_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.solicitud_viaje_id_sol_viaje_seq OWNED BY public.solicitud_viaje.id;


--
-- TOC entry 249 (class 1259 OID 17082)
-- Name: solicitud_viaje_id_usuario_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.solicitud_viaje_id_usuario_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.solicitud_viaje_id_usuario_seq OWNER TO postgres;

--
-- TOC entry 3554 (class 0 OID 0)
-- Dependencies: 249
-- Name: solicitud_viaje_id_usuario_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.solicitud_viaje_id_usuario_seq OWNED BY public.solicitud_viaje.id_usuario;


--
-- TOC entry 225 (class 1259 OID 16711)
-- Name: targeta; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.targeta (
    id integer NOT NULL,
    nom_titular character varying(30) NOT NULL,
    csv character varying NOT NULL,
    estado boolean DEFAULT true NOT NULL,
    id_usuario integer NOT NULL,
    "createdAt" timestamp with time zone,
    "updatedAt" timestamp with time zone,
    num_targeta character varying(16) NOT NULL,
    fech_ven date NOT NULL
);


ALTER TABLE public.targeta OWNER TO postgres;

--
-- TOC entry 224 (class 1259 OID 16710)
-- Name: targeta_id_targeta_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.targeta_id_targeta_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.targeta_id_targeta_seq OWNER TO postgres;

--
-- TOC entry 3555 (class 0 OID 0)
-- Dependencies: 224
-- Name: targeta_id_targeta_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.targeta_id_targeta_seq OWNED BY public.targeta.id;


--
-- TOC entry 244 (class 1259 OID 16934)
-- Name: targeta_id_usuario_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.targeta_id_usuario_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.targeta_id_usuario_seq OWNER TO postgres;

--
-- TOC entry 3556 (class 0 OID 0)
-- Dependencies: 244
-- Name: targeta_id_usuario_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.targeta_id_usuario_seq OWNED BY public.targeta.id_usuario;


--
-- TOC entry 223 (class 1259 OID 16686)
-- Name: usuarios; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.usuarios (
    id integer NOT NULL,
    correo character varying NOT NULL,
    password character varying NOT NULL,
    nombre character varying NOT NULL,
    nro_registro character(9) NOT NULL,
    celular character(8),
    img character varying,
    carrera character varying(20),
    google boolean,
    sexo boolean NOT NULL,
    estado boolean DEFAULT true NOT NULL,
    "createdAt" timestamp without time zone,
    "updatedAt" timestamp with time zone,
    id_rol integer NOT NULL
);


ALTER TABLE public.usuarios OWNER TO postgres;

--
-- TOC entry 222 (class 1259 OID 16685)
-- Name: usuario_id_usuario_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.usuario_id_usuario_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.usuario_id_usuario_seq OWNER TO postgres;

--
-- TOC entry 3557 (class 0 OID 0)
-- Dependencies: 222
-- Name: usuario_id_usuario_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.usuario_id_usuario_seq OWNED BY public.usuarios.id;


--
-- TOC entry 238 (class 1259 OID 16866)
-- Name: usuarios_id_rol_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.usuarios_id_rol_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.usuarios_id_rol_seq OWNER TO postgres;

--
-- TOC entry 3558 (class 0 OID 0)
-- Dependencies: 238
-- Name: usuarios_id_rol_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.usuarios_id_rol_seq OWNED BY public.usuarios.id_rol;


--
-- TOC entry 219 (class 1259 OID 16663)
-- Name: vehiculo; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.vehiculo (
    id integer NOT NULL,
    num_placa character varying(6) NOT NULL,
    modelo character varying(30) NOT NULL,
    "año" character varying(4) NOT NULL,
    cap_pasajeros character varying(1),
    img character varying,
    estado boolean DEFAULT true NOT NULL,
    id_usuario integer NOT NULL,
    "createdAt" timestamp with time zone,
    "updatedAt" timestamp with time zone
);


ALTER TABLE public.vehiculo OWNER TO postgres;

--
-- TOC entry 218 (class 1259 OID 16662)
-- Name: vehiculo_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.vehiculo_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.vehiculo_id_seq OWNER TO postgres;

--
-- TOC entry 3559 (class 0 OID 0)
-- Dependencies: 218
-- Name: vehiculo_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.vehiculo_id_seq OWNED BY public.vehiculo.id;


--
-- TOC entry 243 (class 1259 OID 16921)
-- Name: vehiculo_id_usuario_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.vehiculo_id_usuario_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.vehiculo_id_usuario_seq OWNER TO postgres;

--
-- TOC entry 3560 (class 0 OID 0)
-- Dependencies: 243
-- Name: vehiculo_id_usuario_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.vehiculo_id_usuario_seq OWNED BY public.vehiculo.id_usuario;


--
-- TOC entry 3254 (class 2604 OID 16657)
-- Name: brevet id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.brevet ALTER COLUMN id SET DEFAULT nextval('public.brevet_id_seq'::regclass);


--
-- TOC entry 3256 (class 2604 OID 16907)
-- Name: brevet id_usuario; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.brevet ALTER COLUMN id_usuario SET DEFAULT nextval('public.brevet_id_usuario_seq'::regclass);


--
-- TOC entry 3285 (class 2604 OID 16828)
-- Name: calificacion_comentario id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.calificacion_comentario ALTER COLUMN id SET DEFAULT nextval('public.calificacion_comentario_id_cal_com_seq'::regclass);


--
-- TOC entry 3260 (class 2604 OID 16675)
-- Name: carac_espe id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.carac_espe ALTER COLUMN id SET DEFAULT nextval('public.carac_espe_id_seq'::regclass);


--
-- TOC entry 3262 (class 2604 OID 16967)
-- Name: carac_espe id_vehiculo; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.carac_espe ALTER COLUMN id_vehiculo SET DEFAULT nextval('public.carac_espe_id_vehiculo_seq'::regclass);


--
-- TOC entry 3272 (class 2604 OID 16742)
-- Name: carrera id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.carrera ALTER COLUMN id SET DEFAULT nextval('public.carrera_id_carrera_seq'::regclass);


--
-- TOC entry 3274 (class 2604 OID 17060)
-- Name: carrera id_pasajero; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.carrera ALTER COLUMN id_pasajero SET DEFAULT nextval('public.carrera_id_pasajero_seq'::regclass);


--
-- TOC entry 3275 (class 2604 OID 17066)
-- Name: carrera id_conductor; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.carrera ALTER COLUMN id_conductor SET DEFAULT nextval('public.carrera_id_conductor_seq'::regclass);


--
-- TOC entry 3282 (class 2604 OID 16805)
-- Name: pago id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pago ALTER COLUMN id SET DEFAULT nextval('public.pago_id_pago_seq'::regclass);


--
-- TOC entry 3286 (class 2604 OID 16894)
-- Name: preferencias id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.preferencias ALTER COLUMN id SET DEFAULT nextval('public.prefencias_id_seq'::regclass);


--
-- TOC entry 3288 (class 2604 OID 16896)
-- Name: preferencias id_usuario; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.preferencias ALTER COLUMN id_usuario SET DEFAULT nextval('public.prefencias_id_usuario_seq'::regclass);


--
-- TOC entry 3280 (class 2604 OID 16781)
-- Name: punto id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.punto ALTER COLUMN id SET DEFAULT nextval('public.punto_id_punto_seq'::regclass);


--
-- TOC entry 3253 (class 2604 OID 16648)
-- Name: rols id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.rols ALTER COLUMN id SET DEFAULT nextval('public.rol_id_seq'::regclass);


--
-- TOC entry 3269 (class 2604 OID 16728)
-- Name: ruta id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.ruta ALTER COLUMN id SET DEFAULT nextval('public.ruta_id_ruta_seq'::regclass);


--
-- TOC entry 3271 (class 2604 OID 16998)
-- Name: ruta id_usuario; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.ruta ALTER COLUMN id_usuario SET DEFAULT nextval('public.ruta_id_usuario_seq'::regclass);


--
-- TOC entry 3276 (class 2604 OID 16762)
-- Name: solicitud_viaje id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.solicitud_viaje ALTER COLUMN id SET DEFAULT nextval('public.solicitud_viaje_id_sol_viaje_seq'::regclass);


--
-- TOC entry 3278 (class 2604 OID 17083)
-- Name: solicitud_viaje id_usuario; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.solicitud_viaje ALTER COLUMN id_usuario SET DEFAULT nextval('public.solicitud_viaje_id_usuario_seq'::regclass);


--
-- TOC entry 3279 (class 2604 OID 17091)
-- Name: solicitud_viaje id_ruta; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.solicitud_viaje ALTER COLUMN id_ruta SET DEFAULT nextval('public.solicitud_viaje_id_ruta_seq'::regclass);


--
-- TOC entry 3266 (class 2604 OID 16714)
-- Name: targeta id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.targeta ALTER COLUMN id SET DEFAULT nextval('public.targeta_id_targeta_seq'::regclass);


--
-- TOC entry 3268 (class 2604 OID 16935)
-- Name: targeta id_usuario; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.targeta ALTER COLUMN id_usuario SET DEFAULT nextval('public.targeta_id_usuario_seq'::regclass);


--
-- TOC entry 3263 (class 2604 OID 16689)
-- Name: usuarios id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.usuarios ALTER COLUMN id SET DEFAULT nextval('public.usuario_id_usuario_seq'::regclass);


--
-- TOC entry 3265 (class 2604 OID 16867)
-- Name: usuarios id_rol; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.usuarios ALTER COLUMN id_rol SET DEFAULT nextval('public.usuarios_id_rol_seq'::regclass);


--
-- TOC entry 3257 (class 2604 OID 16666)
-- Name: vehiculo id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.vehiculo ALTER COLUMN id SET DEFAULT nextval('public.vehiculo_id_seq'::regclass);


--
-- TOC entry 3259 (class 2604 OID 16922)
-- Name: vehiculo id_usuario; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.vehiculo ALTER COLUMN id_usuario SET DEFAULT nextval('public.vehiculo_id_usuario_seq'::regclass);


--
-- TOC entry 3480 (class 0 OID 16654)
-- Dependencies: 217
-- Data for Name: brevet; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.brevet (id, numero, fech_emi, fech_ven, categoria, img_frontal, img_reverso, estado, id_usuario, "createdAt", "updatedAt") FROM stdin;
1	8006006	2023-05-25	2023-06-26	p	ruta/foto_ambe.jpg	ruta/foto_reverso.jpg	t	2	2023-06-20 17:50:36.504-04	2023-06-20 18:53:37.609-04
2	8006006	2023-05-25	2023-06-26	p	ruta/foto_ambe.jpg	ruta/foto_reverso.jpg	t	2	2023-06-20 21:46:46.789-04	2023-06-20 21:46:46.789-04
\.


--
-- TOC entry 3500 (class 0 OID 16825)
-- Dependencies: 237
-- Data for Name: calificacion_comentario; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.calificacion_comentario (id, comentario, calificacion, id_usuario, id_soliviaje, id_carrera, "createdAt", "updatedAt", estado) FROM stdin;
2	mucho ruido en el viaje	2	2	1	\N	2023-06-20 23:03:13.742-04	2023-06-20 23:03:13.742-04	t
\.


--
-- TOC entry 3484 (class 0 OID 16672)
-- Dependencies: 221
-- Data for Name: carac_espe; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.carac_espe (id, caracteristica, estado, id_vehiculo, "createdAt", "updatedAt") FROM stdin;
2	disponible para todo public y personas ...	t	1	2023-06-20 20:25:40.927-04	2023-06-20 20:27:49.488-04
\.


--
-- TOC entry 3492 (class 0 OID 16739)
-- Dependencies: 229
-- Data for Name: carrera; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.carrera (id, estado_carrera, hora_p, hora_d, id_pasajero, id_conductor, "createdAt", "updatedAt", estado) FROM stdin;
\.


--
-- TOC entry 3498 (class 0 OID 16802)
-- Dependencies: 235
-- Data for Name: pago; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.pago (id, costo, estado_pago, costo_total, id_targeta, id_carrera, id_soli_viaje, estado, "createdAt", "updatedAt") FROM stdin;
1	10	t	10	\N	\N	1	t	2023-06-20 23:32:26.504-04	2023-06-20 23:33:05.034-04
\.


--
-- TOC entry 3504 (class 0 OID 16891)
-- Dependencies: 241
-- Data for Name: preferencias; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.preferencias (id, preferencia, estado, id_usuario, "createdAt", "updatedAt") FROM stdin;
1	Musica : bachata	t	2	2023-06-20 16:50:07.589-04	2023-06-20 16:53:21.876-04
\.


--
-- TOC entry 3496 (class 0 OID 16778)
-- Dependencies: 233
-- Data for Name: punto; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.punto (id, lat, long, nom_lugar, estado, id_ruta, id_soli_viaje, id_carrera, "createdAt", "updatedAt") FROM stdin;
2	51.5074	-0.1278	algun parte	t	2	\N	\N	2023-06-20 23:59:53.647-04	2023-06-20 23:59:53.647-04
\.


--
-- TOC entry 3478 (class 0 OID 16645)
-- Dependencies: 215
-- Data for Name: rols; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.rols (id, nombre_rol, descripcion, "createdAt", "updatedAt") FROM stdin;
1	USUARIO	Este rol es para los pasajeros	\N	\N
2	CONDUCTOR	Este rol es para los conductores, alquilan los servicios de trasnporte en sus vehiculos.	2023-06-20 07:15:42.004	2023-06-20 10:31:21.104
\.


--
-- TOC entry 3490 (class 0 OID 16725)
-- Dependencies: 227
-- Data for Name: ruta; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.ruta (id, strpolyline, estado_cap, cant_pasajero, estado, id_usuario, "createdAt", "updatedAt", hora_p) FROM stdin;
2	ascaca5s4c65a4c65v4s456s	t	1	t	2	2023-06-20 21:05:54.487-04	2023-06-20 21:05:54.487-04	10:50:00
3	ascaca5s4c65a4c65v4s456s	t	1	t	3	2023-06-20 21:54:57.408-04	2023-06-20 21:54:57.408-04	10:50:00
4	ascaca5s4c65a4c65v4s456s	\N	\N	t	3	2023-06-20 22:16:17.15-04	2023-06-20 22:16:17.15-04	10:50:00
\.


--
-- TOC entry 3494 (class 0 OID 16759)
-- Dependencies: 231
-- Data for Name: solicitud_viaje; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.solicitud_viaje (id, strpolyline, hora_p, cant_pasajeros, estado, id_usuario, id_ruta, "createdAt", "updatedAt") FROM stdin;
1	ascaca5s4c65a4c65v4s456s	10:50:00	2	t	3	2	2023-06-20 22:17:28.029-04	2023-06-20 22:17:28.029-04
\.


--
-- TOC entry 3488 (class 0 OID 16711)
-- Dependencies: 225
-- Data for Name: targeta; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.targeta (id, nom_titular, csv, estado, id_usuario, "createdAt", "updatedAt", num_targeta, fech_ven) FROM stdin;
2	brayan Gomez	ascas46456465svsvsdvsdv46s5v4s65vsdvsvsdvsvscab	t	2	2023-06-20 19:44:14.62-04	2023-06-20 19:44:14.62-04	1234567890123456	2023-06-26
1	Kevin Gomez	ascasascab	f	2	2023-06-20 19:43:40.561-04	2023-06-20 19:45:56.333-04	12345678	2023-06-26
\.


--
-- TOC entry 3486 (class 0 OID 16686)
-- Dependencies: 223
-- Data for Name: usuarios; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.usuarios (id, correo, password, nombre, nro_registro, celular, img, carrera, google, sexo, estado, "createdAt", "updatedAt", id_rol) FROM stdin;
3	kevin@gmail.com	123456aa	Kevin	216162000	70000000	\N	\N	\N	t	t	2023-06-21 01:52:23.068	2023-06-20 21:52:23.068-04	1
2	kevin@gmail.com	123abc	brayan	216162000	70000000	\N	\N	\N	t	t	2023-06-20 19:48:45.76	2023-06-20 21:53:33.42-04	2
\.


--
-- TOC entry 3482 (class 0 OID 16663)
-- Dependencies: 219
-- Data for Name: vehiculo; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.vehiculo (id, num_placa, modelo, "año", cap_pasajeros, img, estado, id_usuario, "createdAt", "updatedAt") FROM stdin;
1	xyz123	Toyo 4runner	2023	4	ruta/foto_ambe.jpg	f	2	2023-06-20 18:52:42.868-04	2023-06-20 18:53:46.059-04
\.


--
-- TOC entry 3561 (class 0 OID 0)
-- Dependencies: 216
-- Name: brevet_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.brevet_id_seq', 2, true);


--
-- TOC entry 3562 (class 0 OID 0)
-- Dependencies: 242
-- Name: brevet_id_usuario_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.brevet_id_usuario_seq', 1, false);


--
-- TOC entry 3563 (class 0 OID 0)
-- Dependencies: 236
-- Name: calificacion_comentario_id_cal_com_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.calificacion_comentario_id_cal_com_seq', 2, true);


--
-- TOC entry 3564 (class 0 OID 0)
-- Dependencies: 253
-- Name: calificacion_comentario_id_carrera_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.calificacion_comentario_id_carrera_seq', 1, true);


--
-- TOC entry 3565 (class 0 OID 0)
-- Dependencies: 252
-- Name: calificacion_comentario_id_soliviaje_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.calificacion_comentario_id_soliviaje_seq', 1, false);


--
-- TOC entry 3566 (class 0 OID 0)
-- Dependencies: 251
-- Name: calificacion_comentario_id_usuario_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.calificacion_comentario_id_usuario_seq', 1, false);


--
-- TOC entry 3567 (class 0 OID 0)
-- Dependencies: 220
-- Name: carac_espe_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.carac_espe_id_seq', 2, true);


--
-- TOC entry 3568 (class 0 OID 0)
-- Dependencies: 245
-- Name: carac_espe_id_vehiculo_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.carac_espe_id_vehiculo_seq', 1, false);


--
-- TOC entry 3569 (class 0 OID 0)
-- Dependencies: 228
-- Name: carrera_id_carrera_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.carrera_id_carrera_seq', 1, false);


--
-- TOC entry 3570 (class 0 OID 0)
-- Dependencies: 248
-- Name: carrera_id_conductor_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.carrera_id_conductor_seq', 1, false);


--
-- TOC entry 3571 (class 0 OID 0)
-- Dependencies: 247
-- Name: carrera_id_pasajero_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.carrera_id_pasajero_seq', 1, false);


--
-- TOC entry 3572 (class 0 OID 0)
-- Dependencies: 255
-- Name: pago_id_carrera_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.pago_id_carrera_seq', 1, false);


--
-- TOC entry 3573 (class 0 OID 0)
-- Dependencies: 234
-- Name: pago_id_pago_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.pago_id_pago_seq', 2, true);


--
-- TOC entry 3574 (class 0 OID 0)
-- Dependencies: 256
-- Name: pago_id_soli_viaje_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.pago_id_soli_viaje_seq', 1, false);


--
-- TOC entry 3575 (class 0 OID 0)
-- Dependencies: 254
-- Name: pago_id_targeta_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.pago_id_targeta_seq', 1, false);


--
-- TOC entry 3576 (class 0 OID 0)
-- Dependencies: 239
-- Name: prefencias_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.prefencias_id_seq', 3, true);


--
-- TOC entry 3577 (class 0 OID 0)
-- Dependencies: 240
-- Name: prefencias_id_usuario_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.prefencias_id_usuario_seq', 2, true);


--
-- TOC entry 3578 (class 0 OID 0)
-- Dependencies: 259
-- Name: punto_id_carrera_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.punto_id_carrera_seq', 1, false);


--
-- TOC entry 3579 (class 0 OID 0)
-- Dependencies: 232
-- Name: punto_id_punto_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.punto_id_punto_seq', 2, true);


--
-- TOC entry 3580 (class 0 OID 0)
-- Dependencies: 257
-- Name: punto_id_ruta_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.punto_id_ruta_seq', 1, false);


--
-- TOC entry 3581 (class 0 OID 0)
-- Dependencies: 258
-- Name: punto_id_soli_viaje_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.punto_id_soli_viaje_seq', 1, false);


--
-- TOC entry 3582 (class 0 OID 0)
-- Dependencies: 214
-- Name: rol_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.rol_id_seq', 5, true);


--
-- TOC entry 3583 (class 0 OID 0)
-- Dependencies: 226
-- Name: ruta_id_ruta_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.ruta_id_ruta_seq', 4, true);


--
-- TOC entry 3584 (class 0 OID 0)
-- Dependencies: 246
-- Name: ruta_id_usuario_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.ruta_id_usuario_seq', 3, true);


--
-- TOC entry 3585 (class 0 OID 0)
-- Dependencies: 250
-- Name: solicitud_viaje_id_ruta_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.solicitud_viaje_id_ruta_seq', 1, false);


--
-- TOC entry 3586 (class 0 OID 0)
-- Dependencies: 230
-- Name: solicitud_viaje_id_sol_viaje_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.solicitud_viaje_id_sol_viaje_seq', 1, true);


--
-- TOC entry 3587 (class 0 OID 0)
-- Dependencies: 249
-- Name: solicitud_viaje_id_usuario_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.solicitud_viaje_id_usuario_seq', 1, false);


--
-- TOC entry 3588 (class 0 OID 0)
-- Dependencies: 224
-- Name: targeta_id_targeta_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.targeta_id_targeta_seq', 2, true);


--
-- TOC entry 3589 (class 0 OID 0)
-- Dependencies: 244
-- Name: targeta_id_usuario_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.targeta_id_usuario_seq', 1, false);


--
-- TOC entry 3590 (class 0 OID 0)
-- Dependencies: 222
-- Name: usuario_id_usuario_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.usuario_id_usuario_seq', 3, true);


--
-- TOC entry 3591 (class 0 OID 0)
-- Dependencies: 238
-- Name: usuarios_id_rol_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.usuarios_id_rol_seq', 1, false);


--
-- TOC entry 3592 (class 0 OID 0)
-- Dependencies: 218
-- Name: vehiculo_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.vehiculo_id_seq', 1, true);


--
-- TOC entry 3593 (class 0 OID 0)
-- Dependencies: 243
-- Name: vehiculo_id_usuario_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.vehiculo_id_usuario_seq', 1, false);


--
-- TOC entry 3292 (class 2606 OID 16915)
-- Name: brevet pk_brevet; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.brevet
    ADD CONSTRAINT pk_brevet PRIMARY KEY (id);


--
-- TOC entry 3312 (class 2606 OID 16832)
-- Name: calificacion_comentario pk_cal_com; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.calificacion_comentario
    ADD CONSTRAINT pk_cal_com PRIMARY KEY (id);


--
-- TOC entry 3296 (class 2606 OID 16975)
-- Name: carac_espe pk_carac_espe; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.carac_espe
    ADD CONSTRAINT pk_carac_espe PRIMARY KEY (id);


--
-- TOC entry 3304 (class 2606 OID 16747)
-- Name: carrera pk_carrera; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.carrera
    ADD CONSTRAINT pk_carrera PRIMARY KEY (id);


--
-- TOC entry 3310 (class 2606 OID 24621)
-- Name: pago pk_pago; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pago
    ADD CONSTRAINT pk_pago PRIMARY KEY (id);


--
-- TOC entry 3314 (class 2606 OID 16900)
-- Name: preferencias pk_preferencia; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.preferencias
    ADD CONSTRAINT pk_preferencia PRIMARY KEY (id);


--
-- TOC entry 3308 (class 2606 OID 24640)
-- Name: punto pk_punto; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.punto
    ADD CONSTRAINT pk_punto PRIMARY KEY (id);


--
-- TOC entry 3290 (class 2606 OID 16652)
-- Name: rols pk_rol; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.rols
    ADD CONSTRAINT pk_rol PRIMARY KEY (id);


--
-- TOC entry 3302 (class 2606 OID 17005)
-- Name: ruta pk_ruta; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.ruta
    ADD CONSTRAINT pk_ruta PRIMARY KEY (id);


--
-- TOC entry 3306 (class 2606 OID 16766)
-- Name: solicitud_viaje pk_sol_viaje; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.solicitud_viaje
    ADD CONSTRAINT pk_sol_viaje PRIMARY KEY (id);


--
-- TOC entry 3300 (class 2606 OID 16718)
-- Name: targeta pk_tageta; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.targeta
    ADD CONSTRAINT pk_tageta PRIMARY KEY (id);


--
-- TOC entry 3298 (class 2606 OID 16694)
-- Name: usuarios pk_usuario; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.usuarios
    ADD CONSTRAINT pk_usuario PRIMARY KEY (id);


--
-- TOC entry 3294 (class 2606 OID 16670)
-- Name: vehiculo pk_vehiculo; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.vehiculo
    ADD CONSTRAINT pk_vehiculo PRIMARY KEY (id);


--
-- TOC entry 3331 (class 2606 OID 17143)
-- Name: calificacion_comentario fk_carrera; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.calificacion_comentario
    ADD CONSTRAINT fk_carrera FOREIGN KEY (id_carrera) REFERENCES public.carrera(id) NOT VALID;


--
-- TOC entry 3328 (class 2606 OID 24610)
-- Name: pago fk_carrera; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pago
    ADD CONSTRAINT fk_carrera FOREIGN KEY (id_carrera) REFERENCES public.carrera(id) NOT VALID;


--
-- TOC entry 3325 (class 2606 OID 24646)
-- Name: punto fk_carrera; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.punto
    ADD CONSTRAINT fk_carrera FOREIGN KEY (id_carrera) REFERENCES public.carrera(id) NOT VALID;


--
-- TOC entry 3321 (class 2606 OID 17076)
-- Name: carrera fk_conductor; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.carrera
    ADD CONSTRAINT fk_conductor FOREIGN KEY (id_conductor) REFERENCES public.usuarios(id) NOT VALID;


--
-- TOC entry 3322 (class 2606 OID 17071)
-- Name: carrera fk_pasajero; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.carrera
    ADD CONSTRAINT fk_pasajero FOREIGN KEY (id_pasajero) REFERENCES public.usuarios(id) NOT VALID;


--
-- TOC entry 3334 (class 2606 OID 16901)
-- Name: preferencias fk_preferencia; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.preferencias
    ADD CONSTRAINT fk_preferencia FOREIGN KEY (id_usuario) REFERENCES public.usuarios(id);


--
-- TOC entry 3318 (class 2606 OID 16874)
-- Name: usuarios fk_rol; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.usuarios
    ADD CONSTRAINT fk_rol FOREIGN KEY (id_rol) REFERENCES public.rols(id) NOT VALID;


--
-- TOC entry 3323 (class 2606 OID 17104)
-- Name: solicitud_viaje fk_ruta; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.solicitud_viaje
    ADD CONSTRAINT fk_ruta FOREIGN KEY (id_ruta) REFERENCES public.ruta(id) NOT VALID;


--
-- TOC entry 3326 (class 2606 OID 24641)
-- Name: punto fk_ruta; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.punto
    ADD CONSTRAINT fk_ruta FOREIGN KEY (id_ruta) REFERENCES public.ruta(id) NOT VALID;


--
-- TOC entry 3329 (class 2606 OID 24615)
-- Name: pago fk_soli_viaje; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pago
    ADD CONSTRAINT fk_soli_viaje FOREIGN KEY (id_soli_viaje) REFERENCES public.solicitud_viaje(id) NOT VALID;


--
-- TOC entry 3327 (class 2606 OID 24651)
-- Name: punto fk_soli_viaje; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.punto
    ADD CONSTRAINT fk_soli_viaje FOREIGN KEY (id_soli_viaje) REFERENCES public.solicitud_viaje(id) NOT VALID;


--
-- TOC entry 3332 (class 2606 OID 17138)
-- Name: calificacion_comentario fk_soliviaje; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.calificacion_comentario
    ADD CONSTRAINT fk_soliviaje FOREIGN KEY (id_soliviaje) REFERENCES public.solicitud_viaje(id) NOT VALID;


--
-- TOC entry 3330 (class 2606 OID 24605)
-- Name: pago fk_targeta; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pago
    ADD CONSTRAINT fk_targeta FOREIGN KEY (id_targeta) REFERENCES public.targeta(id) NOT VALID;


--
-- TOC entry 3315 (class 2606 OID 16916)
-- Name: brevet fk_usuario; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.brevet
    ADD CONSTRAINT fk_usuario FOREIGN KEY (id_usuario) REFERENCES public.usuarios(id) NOT VALID;


--
-- TOC entry 3316 (class 2606 OID 16929)
-- Name: vehiculo fk_usuario; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.vehiculo
    ADD CONSTRAINT fk_usuario FOREIGN KEY (id_usuario) REFERENCES public.usuarios(id) NOT VALID;


--
-- TOC entry 3319 (class 2606 OID 16942)
-- Name: targeta fk_usuario; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.targeta
    ADD CONSTRAINT fk_usuario FOREIGN KEY (id_usuario) REFERENCES public.usuarios(id) NOT VALID;


--
-- TOC entry 3320 (class 2606 OID 17006)
-- Name: ruta fk_usuario; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.ruta
    ADD CONSTRAINT fk_usuario FOREIGN KEY (id_usuario) REFERENCES public.usuarios(id) NOT VALID;


--
-- TOC entry 3324 (class 2606 OID 17099)
-- Name: solicitud_viaje fk_usuario; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.solicitud_viaje
    ADD CONSTRAINT fk_usuario FOREIGN KEY (id_usuario) REFERENCES public.usuarios(id) NOT VALID;


--
-- TOC entry 3333 (class 2606 OID 17133)
-- Name: calificacion_comentario fk_usuario; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.calificacion_comentario
    ADD CONSTRAINT fk_usuario FOREIGN KEY (id_usuario) REFERENCES public.usuarios(id) NOT VALID;


--
-- TOC entry 3317 (class 2606 OID 16976)
-- Name: carac_espe fk_vehiculo; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.carac_espe
    ADD CONSTRAINT fk_vehiculo FOREIGN KEY (id_vehiculo) REFERENCES public.vehiculo(id) NOT VALID;


-- Completed on 2023-06-21 00:02:29

--
-- PostgreSQL database dump complete
--

