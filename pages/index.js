/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Accordion from "../components/accordion";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Alex Escofet Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.head}>
          <div className={styles.logo}></div>
          <h1 className={styles.title}>Welcome to my Portfolio</h1>
        </div>

        <div className={styles.bio}>
        <div className={styles.avatar}></div>
        <p className={styles.description}>Hi, my name is Alex Escofet</p>
        <div className={styles.text}>
          <p>
            Since I was a child I have liked to know how things work, which made
            me study Physiotherapy and then a master's degree in Respiratory
            Physiotherapy.
          </p>
          <p>
            When I finished my studies I started working in the ICU
            of Vall d'Hebron Hospital, where I learned to manage time and to
            analyze every situation before acting, but with the Covid, the job
            offers disappeared, and as I have always liked computers and how they
            work I decided to do the Web Developer Bootcamp where I have developed
            3 projects with different technologies: A basic video game with
            Canvas, a web application connected to GoogleBooks API and a social
            web with React.
          </p>
          <p>
            Now I'm looking for a job that allows me to keep
            learning new technologies and consolidate what I've learned while
            developing new web applications.
          </p>
 
        </div>
        </div>
      <Accordion/>
      </main>
      <footer className={styles.footer}>
        <a
          href="https:github.com/alescofet"
          target="_blank"
          rel="noopener noreferrer"
        >
          Developed by Alex Escofet
        </a>
      </footer>
    </div>
  );
}
