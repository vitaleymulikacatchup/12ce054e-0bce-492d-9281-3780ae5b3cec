"use client";
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarLayoutSplitBottom from '@/components/navigation/NavbarLayoutSplitBottom/NavbarLayoutSplitBottom';
import FrameHero from '@/components/sections/layouts/hero/FrameHero';
import SocialsAbout from '@/components/sections/layouts/about/SocialsAbout';
import HowToBuy2D from '@/components/sections/layouts/howtobuy/2DHTB';
import BigNumberTokenomics from '@/components/sections/layouts/tokenomics/BigNumberTokenomics';
import CentralFAQ from '@/components/sections/layouts/faq/CentralFAQ';
import FooterBase from '@/components/footer/FooterBase';

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: "funAndTrendy", colorTemplate: 2, textAnimation: "slide" }}>
      <NavbarLayoutSplitBottom
        logoSrc="/images/logo.svg"
        logoWidth={150}
        logoHeight={40}
        buttonText="Join Newsletter"
        onButtonClick={() => {/* handle click */}}
        navItems={[
          { name: "Hero", id: "hero" },
          { name: "About", id: "about" },
          { name: "How to Buy", id: "how-to-buy" },
          { name: "Tokenomics", id: "tokenomics" },
          { name: "FAQ", id: "faq" },
          { name: "Footer", id: "footer" }
        ]}
      />
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <FrameHero
          title="Welcome to Lumina Token"
          description="A secure and community-first token for everyone."
          primaryButtonText="Join Now"
          secondaryButtonText="Learn More"
        />
      </div>
      <div id="about" data-section="about" className="scroll-mt-24">
        <SocialsAbout
          title="Join Our Vibrant Community"
          descriptions={["Explore, share, and grow together.", "Stay connected with the latest updates.", "Be part of the change."]}
        />
      </div>
      <div id="how-to-buy" data-section="how-to-buy" className="scroll-mt-24">
        <HowToBuy2D
          variant="simple"
        />
      </div>
      <div id="tokenomics" data-section="tokenomics" className="scroll-mt-24">
        <BigNumberTokenomics
          title="Key Token Metrics"
          description="Understand the fundamentals of our token.
          Learn about supply, distribution, and key mechanics."
          kpiItems={[
            { value: "10M", description: "Total Supply", longDescription: "Total amount of tokens that have been created.", icon: Star } ,
            { value: "5M", description: "Circulating Supply", longDescription: "Tokens currently in circulation.", icon: Star },
            { value: "1M", description: "Liquidity", longDescription: "Amount of tokens available for trading.", icon: Star }
          ]}
        />
      </div>
      <div id="faq" data-section="faq" className="scroll-mt-24">
        <CentralFAQ
          items={[
            { title: "What is Lumina Token?", content: "Lumina Token is a community-driven crypto asset designed to empower users." },
            { title: "How can I buy Lumina Token?", content: "You can buy Lumina Token through various exchange platforms." },
            { title: "What are the benefits of Lumina Token?", content: "The benefits include community governance, staking options, and growth potential." },
            { title: "How is security ensured?", content: "We implement robust security measures and regular audits to protect your investments." }
          ]}
        />
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24">
        <FooterBase
          logoSrc="/images/logo.svg"
          logoWidth={150}
          logoHeight={40}
          columns={[
            { title: "Community", items: [{ label: "Join Us", onClick: () => {/* handle click */} }, { label: "Blog", onClick: () => {/* handle click */} }] },
            { title: "Support", items: [{ label: "Help Center", onClick: () => {/* handle click */} }, { label: "Contact Us", onClick: () => {/* handle click */} }] },
            { title: "Legal", items: [{ label: "Privacy Policy", onClick: () => {/* handle click */} }, { label: "Terms of Service", onClick: () => {/* handle click */} }] }
          ]}
          copyrightText="© 2023 Lumina Token. All rights reserved."
          onPrivacyClick={() => {/* handle click */}}
        />
      </div>
    </SiteThemeProvider>
  );
}
