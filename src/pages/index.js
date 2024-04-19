import React from "react";
import {
  AboutSection,
  ArticlesSection,
  ContactSection,
  HeroSection,
  InterestsSection,
  Page,
  ProjectsSection,
  Seo,
} from "gatsby-theme-portfolio-minimal";

export default function IndexPage() {
  return (
    <>
      <Seo title="Alejandro · Personal Webpage" />
      <Page useSplashScreenAnimation>
        <HeroSection sectionId="hero" />
        {/* <ArticlesSection sectionId="articles" heading="Latest Articles" sources={['Medium']} /> */}
        <AboutSection sectionId="about" heading="About me:" />
        <ProjectsSection sectionId="projects" heading="Some projects:" />
        <InterestsSection sectionId="skills" heading="My tech:" />
        <ContactSection sectionId="contact" heading="Reach out to me!" />
      </Page>
    </>
  );
}
