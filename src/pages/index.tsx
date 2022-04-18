import Layout from "@/components/layout/Layout";
import NextImage from "@/components/NextImage";
import Seo from "@/components/Seo";
import { ArrowRightIcon, LightningBoltIcon } from "@heroicons/react/solid";
import Link from "next/link";
import { ImTelegram, ImTwitter } from "react-icons/im";
import { RiDiscordFill } from "react-icons/ri";

const communities = [
  {
    name: "Twitter",
    link: "https://twitter.com/FanFirstDAO",
    description: "Stay up to date with the latest news.",
    icon: ImTwitter,
  },
  {
    name: "Telegram",
    link: "https://t.me/+OU_q8BS_Mg04MDc0",
    description: "News and chat about upcoming events and memberships.",
    icon: ImTelegram,
  },
  {
    name: "Discord",
    link: "https://discord.gg/A2kUtuBW8K",
    description:
      "Join the conversation on Discord and help shape the future of events.",
    icon: RiDiscordFill,
  },
];

const tickets = [
  {
    title: "Ariana Grande VIP 🦄 Fortnite 🔴 Live XXL",
    description:
      "VIP access for the entire events, private Q&A and picture moment + special NFT",
    total: 1200,
    live: true,
    attendence: 500,
    avatars: [
      "https://lh3.googleusercontent.com/gcuf2yHdebTUObIBYXf9jqMtMcQnSskNQzdSu_ZBQkLRA5BETkhium0Uth7_b3heWoEcLAfi1gRHk_PsK797qzw1YYv2bmsLbwy-=w286",
      "https://miro.medium.com/max/1066/1*KPsITt8mUz9hPtkSUCmgVg.jpeg",
      "https://lh3.googleusercontent.com/px9_CSbmZXjzsvW7B0WsEGxYtto5zFrpIuigNoLHj6--ELB7q0zdshHX6dunRzIfME9tIWiHVXfsqwjEakS-AUeBi7i9q_l1BAUj=w286",
      "https://cryptopotato.com/wp-content/uploads/2022/01/img3_cryptopunks.jpg",
      "https://lh3.googleusercontent.com/oQ3KNocA_4xUwZH8H8iRVqHUv1GjuDVbmHnFlW_GIo-Jacaa39mn30zouSSgMRaA4xHQm4x5I7fg4Zf_93yEyEgKrxgIvC2MN_wroq0=w286",
      "https://lh3.googleusercontent.com/X4e1zA-nKpStOn-08GgZj7p3T_rj25Ek-lHaSVBb4_xCyC2xVFr8x7Ot_zMjhjHaIocfr69d3UIwFbNlm7EBRjAIZEyri4ppAobnhg=w286",
      "https://lh3.googleusercontent.com/Cp6rVymkc000FJI_k2dR5HNIVD9Rndl5vaDHP-Tkh1udLR7q4r_KFnWFaeWTklVQVDYymR2E2yGeqlHuEQJoD-XvGXbMtz9yR_clJQ=w286",
      "https://lh3.googleusercontent.com/ABB4MtmpJELAtI9jqDDtiMgD3UkD_BDl1I7sS942CbSC5pkiQMrLhQx-oD3f6vSGkBwjqwRjrrK7dE7kPD-vkVy4JywSjn13jQ4e_w=w286",
      "https://lh3.googleusercontent.com/CH-sGxuf3xFbaPmCIwzZYK8xdNFSUMlhW4OkL1fWSxeB8OpvRAQ_3b9IDvOfgP9P8ZjUPu4SqgfRuhwhuCc0vJ0FJ_WN2Qt67jg33yY=w286",
      "https://www.researchgate.net/publication/358741448/figure/fig3/AS:1125758902779907@1645413246825/CryptoPunk-1463-Properties-and-corresponding-frequencies-in-the-collection-male-60.ppm",
    ],
    logo: () => (
      <NextImage
        width={60}
        height={70}
        alt="fortnite logo"
        // className="pt-4"
        src="https://upload.wikimedia.org/wikipedia/commons/3/31/Epic_Games_logo.svg"
      />
    ),
    image:
      "https://cdn.vox-cdn.com/thumbor/dIOdu9lla2uxvXq2p1tqw7v8UFA=/0x0:3840x2160/1200x800/filters:focal(1613x773:2227x1387)/cdn.vox-cdn.com/uploads/chorus_image/image/69700009/Fortnite_20210807141447.0.jpg",
  },
  {
    title: "Miami Crypto Club membership",
    description: "IRL hangout for crypto and NFT investors, ticket is required",
    total: 20,
    live: false,
    attendence: 8,
    avatars: [
      "https://lh3.googleusercontent.com/X4e1zA-nKpStOn-08GgZj7p3T_rj25Ek-lHaSVBb4_xCyC2xVFr8x7Ot_zMjhjHaIocfr69d3UIwFbNlm7EBRjAIZEyri4ppAobnhg=w286",
      "https://lh3.googleusercontent.com/Cp6rVymkc000FJI_k2dR5HNIVD9Rndl5vaDHP-Tkh1udLR7q4r_KFnWFaeWTklVQVDYymR2E2yGeqlHuEQJoD-XvGXbMtz9yR_clJQ=w286",
      "https://lh3.googleusercontent.com/ABB4MtmpJELAtI9jqDDtiMgD3UkD_BDl1I7sS942CbSC5pkiQMrLhQx-oD3f6vSGkBwjqwRjrrK7dE7kPD-vkVy4JywSjn13jQ4e_w=w286",
      "https://lh3.googleusercontent.com/CH-sGxuf3xFbaPmCIwzZYK8xdNFSUMlhW4OkL1fWSxeB8OpvRAQ_3b9IDvOfgP9P8ZjUPu4SqgfRuhwhuCc0vJ0FJ_WN2Qt67jg33yY=w286",
      "https://www.researchgate.net/publication/358741448/figure/fig3/AS:1125758902779907@1645413246825/CryptoPunk-1463-Properties-and-corresponding-frequencies-in-the-collection-male-60.ppm",
    ],
    logo: () => (
      <NextImage
        width={80}
        height={70}
        alt="fortnite logo"
        // className="z-0 block"
        src="https://static.wixstatic.com/media/27e965_8eb88d1797474a7095792ce41f6d2848~mv2.png/v1/fill/w_560,h_420,al_c,usm_0.66_1.00_0.01,enc_auto/Club%20Miami%20Logo%202_PNG.png"
      />
    ),
    image:
      "https://phantom-elmundo.unidadeditorial.es/8525e0dfab25b55ff9c961708ccac9f9/f/jpg/assets/multimedia/imagenes/2021/04/15/16184818623172.jpg",
  },
  {
    title: "LOL ⚔️ Summer tournament 2022",
    description:
      "Live ESports LOL tournament, gain exclusive streams, goodies and VIP access",
    total: 1200,
    live: true,
    attendence: 9540,
    avatars: [
      "https://lh3.googleusercontent.com/ABB4MtmpJELAtI9jqDDtiMgD3UkD_BDl1I7sS942CbSC5pkiQMrLhQx-oD3f6vSGkBwjqwRjrrK7dE7kPD-vkVy4JywSjn13jQ4e_w=w286",
      "https://lh3.googleusercontent.com/HnaSiiqL7nEmPlEh45gihd0xpOXim9hEZ7b5WCzVGSjCKioi1NK3kMVTnbGolqvfCFm9xry9qL5GEDbTKqPF7sFnl_qhtVKlX4pAlw=w286",
      "https://lh3.googleusercontent.com/bzE2Y-tQAXlIqtApVj8uzGg0iNB-VtERdQqqmxfaU6gxifea84lbifg8ndW_Gv1Yow7RmmqEDS2L4BmFkIgU2QLAL2OyWltKStQz=w286",
      "https://lh3.googleusercontent.com/CH-sGxuf3xFbaPmCIwzZYK8xdNFSUMlhW4OkL1fWSxeB8OpvRAQ_3b9IDvOfgP9P8ZjUPu4SqgfRuhwhuCc0vJ0FJ_WN2Qt67jg33yY=w286",
      "https://www.researchgate.net/publication/358741448/figure/fig3/AS:1125758902779907@1645413246825/CryptoPunk-1463-Properties-and-corresponding-frequencies-in-the-collection-male-60.ppm",
      "https://lh3.googleusercontent.com/X4e1zA-nKpStOn-08GgZj7p3T_rj25Ek-lHaSVBb4_xCyC2xVFr8x7Ot_zMjhjHaIocfr69d3UIwFbNlm7EBRjAIZEyri4ppAobnhg=w286",
      "https://lh3.googleusercontent.com/Cp6rVymkc000FJI_k2dR5HNIVD9Rndl5vaDHP-Tkh1udLR7q4r_KFnWFaeWTklVQVDYymR2E2yGeqlHuEQJoD-XvGXbMtz9yR_clJQ=w286",
    ],
    logo: () => (
      <NextImage
        width={150}
        height={70}
        alt="fortnite logo"
        // className="z-0 block"
        src="https://www.leagueoflegends.com/static/logo-1200-589b3ef693ce8a750fa4b4704f1e61f2.png"
      />
    ),

    image:
      "https://www.rtlnieuws.nl/sites/default/files/content/images/2018/03/28/e-sports.jpg?itok=Z12YTT_j&width=1024&height=576&impolicy=semi_dynamic",
  },
  {
    title: "Las Vegas Formula 1 paddock pass",
    description:
      "Join the exclusive Formula 1 paddock club and get close to the action",
    total: 25,
    live: true,
    attendence: 5,
    avatars: [
      "https://miro.medium.com/max/1066/1*KPsITt8mUz9hPtkSUCmgVg.jpeg",
      "https://lh3.googleusercontent.com/CH-sGxuf3xFbaPmCIwzZYK8xdNFSUMlhW4OkL1fWSxeB8OpvRAQ_3b9IDvOfgP9P8ZjUPu4SqgfRuhwhuCc0vJ0FJ_WN2Qt67jg33yY=w286",
      "https://www.researchgate.net/publication/358741448/figure/fig3/AS:1125758902779907@1645413246825/CryptoPunk-1463-Properties-and-corresponding-frequencies-in-the-collection-male-60.ppm",
      "https://lh3.googleusercontent.com/KbC-9ge1BNt-tBqPwNQpd9OwaVW9UkFG8WjIYYsnzNPQGM7UH3IDRROeBxOkL8n2gT416IWW6vgMwKO8qhqUN-e2YQgeguJSWyqI=w286",
      "https://lh3.googleusercontent.com/eZ605ej6-JmXXooFqrrPbewBGoqtf9IpPdFD2KHX9mTM8NbGgxt-VqkLRof-XlR-h20VtVbnsZO6Yp6v6ObLibbzI9h4d7vAKOvZ=w286",
      "https://lh3.googleusercontent.com/7fW6NZDkNzpQLV-c1e0sP7KfaYbxhrwN_iGVDWXu8NN-5pZYM7xPR-VSXVXQhA2p55uDz2Nprx5aAVc22zAxJmXTFloe0DQ9oYaM2Q=w286",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFeoEwhsMtSJ1q_1PqJ2tEDsOU4PpaCZRhBg&usqp=CAU",

      "https://cryptopotato.com/wp-content/uploads/2022/01/img3_cryptopunks.jpg",
      "https://lh3.googleusercontent.com/X4e1zA-nKpStOn-08GgZj7p3T_rj25Ek-lHaSVBb4_xCyC2xVFr8x7Ot_zMjhjHaIocfr69d3UIwFbNlm7EBRjAIZEyri4ppAobnhg=w286",
      "https://lh3.googleusercontent.com/Cp6rVymkc000FJI_k2dR5HNIVD9Rndl5vaDHP-Tkh1udLR7q4r_KFnWFaeWTklVQVDYymR2E2yGeqlHuEQJoD-XvGXbMtz9yR_clJQ=w286",
    ],
    logo: () => (
      <NextImage
        width={120}
        height={70}
        alt="fortnite logo"
        // className="z-0 block"
        src="https://1000logos.net/wp-content/uploads/2021/06/F1-logo.png"
      />
    ),
    image:
      "https://www.formula1.com/content/dam/fom-website/manual/Misc/2022manual/2022Races/SaudiArabainGP/Sunday/GettyImages-1388194642.jpg",
  },
  {
    title: "#1 Minecraft server creator access 🏠",
    description:
      "Gain creator access to the #1 Minecraft server with the worlds biggest streamers and builders",
    total: 100,
    live: false,
    attendence: 25,
    avatars: [
      "https://lh3.googleusercontent.com/KbC-9ge1BNt-tBqPwNQpd9OwaVW9UkFG8WjIYYsnzNPQGM7UH3IDRROeBxOkL8n2gT416IWW6vgMwKO8qhqUN-e2YQgeguJSWyqI=w286",
      "https://lh3.googleusercontent.com/eZ605ej6-JmXXooFqrrPbewBGoqtf9IpPdFD2KHX9mTM8NbGgxt-VqkLRof-XlR-h20VtVbnsZO6Yp6v6ObLibbzI9h4d7vAKOvZ=w286",
      "https://lh3.googleusercontent.com/7fW6NZDkNzpQLV-c1e0sP7KfaYbxhrwN_iGVDWXu8NN-5pZYM7xPR-VSXVXQhA2p55uDz2Nprx5aAVc22zAxJmXTFloe0DQ9oYaM2Q=w286",

      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFeoEwhsMtSJ1q_1PqJ2tEDsOU4PpaCZRhBg&usqp=CAU",
      "https://miro.medium.com/max/1066/1*KPsITt8mUz9hPtkSUCmgVg.jpeg",
      "https://cryptopotato.com/wp-content/uploads/2022/01/img3_cryptopunks.jpg",
      "https://lh3.googleusercontent.com/X4e1zA-nKpStOn-08GgZj7p3T_rj25Ek-lHaSVBb4_xCyC2xVFr8x7Ot_zMjhjHaIocfr69d3UIwFbNlm7EBRjAIZEyri4ppAobnhg=w286",
      "https://lh3.googleusercontent.com/Cp6rVymkc000FJI_k2dR5HNIVD9Rndl5vaDHP-Tkh1udLR7q4r_KFnWFaeWTklVQVDYymR2E2yGeqlHuEQJoD-XvGXbMtz9yR_clJQ=w286",
      "https://lh3.googleusercontent.com/ABB4MtmpJELAtI9jqDDtiMgD3UkD_BDl1I7sS942CbSC5pkiQMrLhQx-oD3f6vSGkBwjqwRjrrK7dE7kPD-vkVy4JywSjn13jQ4e_w=w286",
      "https://lh3.googleusercontent.com/CH-sGxuf3xFbaPmCIwzZYK8xdNFSUMlhW4OkL1fWSxeB8OpvRAQ_3b9IDvOfgP9P8ZjUPu4SqgfRuhwhuCc0vJ0FJ_WN2Qt67jg33yY=w286",
      "https://www.researchgate.net/publication/358741448/figure/fig3/AS:1125758902779907@1645413246825/CryptoPunk-1463-Properties-and-corresponding-frequencies-in-the-collection-male-60.ppm",
    ],
    logo: () => (
      <NextImage
        width={180}
        height={70}
        alt="fortnite logo"
        // className="z-0 block"
        src="https://geocraft.nl/wp-content/uploads/2015/05/minecraft-logo-transparent-background-ut05tirq-1.png"
      />
    ),
    image:
      "https://api.hostman.com/article/image/4d9091f354215c3ac477bd12de4ae51f",
  },
  {
    title: "Bored ape clubhouse lifetime membership",
    description:
      "Join the bored ape clubhouse and have a lifetime membership with benefits",
    total: 500,
    live: false,
    attendence: 154,
    avatars: [
      "https://lh3.googleusercontent.com/KbC-9ge1BNt-tBqPwNQpd9OwaVW9UkFG8WjIYYsnzNPQGM7UH3IDRROeBxOkL8n2gT416IWW6vgMwKO8qhqUN-e2YQgeguJSWyqI=w286",
      "https://lh3.googleusercontent.com/eZ605ej6-JmXXooFqrrPbewBGoqtf9IpPdFD2KHX9mTM8NbGgxt-VqkLRof-XlR-h20VtVbnsZO6Yp6v6ObLibbzI9h4d7vAKOvZ=w286",
      "https://lh3.googleusercontent.com/7fW6NZDkNzpQLV-c1e0sP7KfaYbxhrwN_iGVDWXu8NN-5pZYM7xPR-VSXVXQhA2p55uDz2Nprx5aAVc22zAxJmXTFloe0DQ9oYaM2Q=w286",

      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFeoEwhsMtSJ1q_1PqJ2tEDsOU4PpaCZRhBg&usqp=CAU",
      "https://miro.medium.com/max/1066/1*KPsITt8mUz9hPtkSUCmgVg.jpeg",
      "https://cryptopotato.com/wp-content/uploads/2022/01/img3_cryptopunks.jpg",
      "https://lh3.googleusercontent.com/X4e1zA-nKpStOn-08GgZj7p3T_rj25Ek-lHaSVBb4_xCyC2xVFr8x7Ot_zMjhjHaIocfr69d3UIwFbNlm7EBRjAIZEyri4ppAobnhg=w286",
      "https://lh3.googleusercontent.com/Cp6rVymkc000FJI_k2dR5HNIVD9Rndl5vaDHP-Tkh1udLR7q4r_KFnWFaeWTklVQVDYymR2E2yGeqlHuEQJoD-XvGXbMtz9yR_clJQ=w286",
      "https://lh3.googleusercontent.com/ABB4MtmpJELAtI9jqDDtiMgD3UkD_BDl1I7sS942CbSC5pkiQMrLhQx-oD3f6vSGkBwjqwRjrrK7dE7kPD-vkVy4JywSjn13jQ4e_w=w286",
      "https://lh3.googleusercontent.com/CH-sGxuf3xFbaPmCIwzZYK8xdNFSUMlhW4OkL1fWSxeB8OpvRAQ_3b9IDvOfgP9P8ZjUPu4SqgfRuhwhuCc0vJ0FJ_WN2Qt67jg33yY=w286",
      "https://www.researchgate.net/publication/358741448/figure/fig3/AS:1125758902779907@1645413246825/CryptoPunk-1463-Properties-and-corresponding-frequencies-in-the-collection-male-60.ppm",
    ],
    logo: () => (
      <NextImage
        width={70}
        height={70}
        alt="fortnite logo"
        // className="z-0 block"
        src="https://ik.imagekit.io/bayc/assets/bayc-footer.png"
      />
    ),
    image:
      "https://lh3.googleusercontent.com/i5dYZRkVCUK97bfprQ3WXyrT9BnLSZtVKGJlKQ919uaUB0sxbngVCioaiyu9r6snqfi2aaTyIvv6DHm4m2R3y7hMajbsv14pSZK8mhs=s2500",
  },
];

const metrics = [
  {
    id: 1,
    stat: "Discord",
    emphasis: "Sell",
    rest: "membership to your community on discord.",
  },
  {
    id: 2,
    stat: "IRL events",
    emphasis: "Tickets",
    rest: "for your IRL events can be sold and scannend with the app.",
  },
  {
    id: 3,
    stat: "NFT's",
    emphasis: "Connect",
    rest: "your NFT's with membership access tokens",
  },
  {
    id: 4,
    stat: "Games",
    emphasis: "Integrate",
    rest: "with games like Minecraft or any other.",
  },
];

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <main className="">
        <div className="absolute z-0">
          <div
            className="media-gradient z-10"
            style={{
              position: "absolute",
              height: 300,
              width: 400,
              top: -100,
              left: -200,
              opacity: 0.3,
              background: "#32e875",
            }}
          ></div>
          <div
            className="media-gradient z-0 hidden lg:block"
            style={{
              position: "absolute",
              height: 300,
              width: 400,
              bottom: -600,
              left: 1000,
              opacity: 0.8,
              background: "#32e875",
            }}
          ></div>
        </div>
        <div className="">
          <section className="relative py-12 sm:py-16 lg:pb-40">
            <div className="absolute bottom-0 right-0 overflow-hidden">
              <img
                className="h-auto w-full origin-bottom-right scale-150 transform lg:mx-auto lg:w-auto lg:scale-100 lg:object-cover"
                src="images/grid.png"
                alt=""
              />
            </div>

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 gap-y-4 lg:grid-cols-2 lg:items-center xl:grid-cols-2">
                <div className="text-center md:px-16 lg:px-0 lg:text-left xl:col-span-1 xl:pr-20">
                  <h2 className="text-base font-semibold uppercase tracking-wide text-green-300">
                    Access the metaverse
                  </h2>
                  <h1 className="font-pj bg-gradient-to-br  from-green-100 to-green-400 bg-clip-text text-5xl font-extrabold  text-transparent sm:text-5xl  lg:text-7xl">
                    Event {"&"} community marketplace for web3.0
                  </h1>
                  <p className="font-inter mt-2 text-xl text-white sm:mt-6">
                    FanFirst unlocks communities and events for the metaverse
                    and beyond, handle sales and access management at a large
                    scale without high minting fees.
                  </p>

                  <div className="mx-auto mt-6 mb-6">
                    <Link href="https://fanfirst.typeform.com/to/wXGIkF3D">
                      <a className="group relative inline-flex">
                        <div className="transitiona-all animate-tilt absolute -inset-px rounded-full bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] opacity-50 blur-lg duration-1000 group-hover:-inset-1 group-hover:opacity-100 group-hover:duration-200"></div>

                        <div className="font-pj relative inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-lg font-bold text-black transition-all duration-200">
                          <LightningBoltIcon className="mr-1 h-6 w-6" />
                          Early access
                        </div>
                      </a>
                    </Link>
                  </div>
                </div>

                <div className="xl:col-span-1">
                  <img className="mx-auto w-full" src="images/vr.png" alt="" />
                </div>
              </div>
            </div>
          </section>
        </div>

        <section className="lg:py-xl bg-green py-6 px-5 sm:py-12 lg:rounded-lg">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="md:flex md:items-center md:justify-between md:space-x-16">
              <div className="max-w-lg xl:max-w-2xl">
                <h2 className="font-pj text-4xl font-bold text-gray-900 sm:text-4xl xl:text-5xl">
                  Scalable {"&"} decentralised
                </h2>
              </div>

              <div className="mt-12 flex flex-grow items-center space-x-4 sm:space-x-8 md:mt-0 lg:space-x-16">
                <div>
                  <p className="font-pj text-4xl font-bold text-gray-900 xl:text-6xl">
                    0.4
                  </p>
                  <p className="font-pj mt-2 text-base font-normal text-gray-800 lg:text-xl">
                    ±seconds
                  </p>
                </div>

                <div>
                  <svg
                    className="h-auto w-4 text-green-900"
                    viewBox="0 0 16 81"
                    fill="none"
                    stroke="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <line
                      y1="-0.5"
                      x2="18.0278"
                      y2="-0.5"
                      transform="matrix(0.83205 0.5547 0.5547 -0.83205 1 56)"
                    />
                    <line
                      y1="-0.5"
                      x2="18.0278"
                      y2="-0.5"
                      transform="matrix(0.83205 0.5547 0.5547 -0.83205 1 21)"
                    />
                    <line
                      y1="-0.5"
                      x2="18.0278"
                      y2="-0.5"
                      transform="matrix(0.83205 0.5547 0.5547 -0.83205 1 49)"
                    />
                    <line
                      y1="-0.5"
                      x2="18.0278"
                      y2="-0.5"
                      transform="matrix(0.83205 0.5547 0.5547 -0.83205 1 14)"
                    />
                    <line
                      y1="-0.5"
                      x2="18.0278"
                      y2="-0.5"
                      transform="matrix(0.83205 0.5547 0.5547 -0.83205 1 42)"
                    />
                    <line
                      y1="-0.5"
                      x2="18.0278"
                      y2="-0.5"
                      transform="matrix(0.83205 0.5547 0.5547 -0.83205 1 7)"
                    />
                    <line
                      y1="-0.5"
                      x2="18.0278"
                      y2="-0.5"
                      transform="matrix(0.83205 0.5547 0.5547 -0.83205 1 70)"
                    />
                    <line
                      y1="-0.5"
                      x2="18.0278"
                      y2="-0.5"
                      transform="matrix(0.83205 0.5547 0.5547 -0.83205 1 35)"
                    />
                    <line
                      y1="-0.5"
                      x2="18.0278"
                      y2="-0.5"
                      transform="matrix(0.83205 0.5547 0.5547 -0.83205 1 0)"
                    />
                    <line
                      y1="-0.5"
                      x2="18.0278"
                      y2="-0.5"
                      transform="matrix(0.83205 0.5547 0.5547 -0.83205 1 63)"
                    />
                    <line
                      y1="-0.5"
                      x2="18.0278"
                      y2="-0.5"
                      transform="matrix(0.83205 0.5547 0.5547 -0.83205 1 28)"
                    />
                  </svg>
                </div>

                <div>
                  <p className="font-pj text-4xl font-bold text-gray-900 xl:text-6xl">
                    $0.00025
                  </p>
                  <p className="font-pj mt-2 text-base font-normal text-gray-800 lg:text-xl">
                    ±transaction cost
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="py-12" id="memberships">
          <div className="absolute z-0">
            <div
              className="media-gradient z-10"
              style={{
                position: "absolute",
                height: 300,
                width: 400,
                top: 900,
                left: -200,
                opacity: 0.3,
                background: "#5438dc",
              }}
            ></div>
            <div
              className="media-gradient z-0 hidden lg:block"
              style={{
                position: "absolute",
                height: 300,
                width: 400,
                bottom: -300,
                left: 400,
                opacity: 0.4,
                background: "#5438dc",
              }}
            ></div>
          </div>

          {/* Header */}
          <div className="relative pb-32">
            <div className="mx-auto max-w-7xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
              <div className="mx-auto text-center">
                <h2 className="text-base font-semibold uppercase tracking-wide text-blue-300">
                  Join an experience
                </h2>
                <h2 className="font-pj mx-auto  max-w-xl bg-gradient-to-br from-blue-100 to-blue-400 bg-clip-text text-4xl font-extrabold  text-transparent sm:text-5xl  lg:text-6xl">
                  Upcoming events {"&"} communities
                </h2>
                <p className="mx-auto mt-5 max-w-xl text-xl text-white">
                  Public sales will start soon. Get a taste for the metaverse
                  and join a new kind of experience
                </p>
              </div>
            </div>
          </div>

          {/* Overlapping cards */}
          <section
            className="relative  mx-auto -mt-40 max-w-7xl px-4 pb-6 sm:px-6 lg:px-8"
            aria-labelledby="contact-heading"
          >
            <div className="grid grid-cols-1 gap-y-20 md:grid-cols-3 md:gap-y-0 md:gap-x-8">
              {tickets.map((ticket, index) => (
                <div
                  key={index}
                  className="-mb-12 flex flex-1 flex-col px-0 md:mb-12 md:px-2"
                >
                  <article className="overflow-hidden rounded-lg border border-gray-400 bg-gray-500 text-gray-100 shadow-md">
                    <div className="relative m-3 rounded-lg">
                      <NextImage
                        width={800}
                        height={800}
                        alt={ticket.title}
                        className="z-0 block h-auto w-full overflow-hidden rounded-lg object-cover"
                        src={ticket.image}
                      />

                      {ticket.live && (
                        <div className=" absolute top-0 left-0 h-12 w-full p-2">
                          <span className=" inline-flex items-center rounded-md bg-gray-500 px-2.5 py-0.5 text-sm font-medium text-white">
                            <svg
                              className="-ml-0.5 mr-1.5 h-2 w-2 text-red-500"
                              fill="currentColor"
                              viewBox="0 0 8 8"
                            >
                              <circle cx={4} cy={4} r={3} />
                            </svg>
                            Live
                          </span>
                        </div>
                      )}

                      <div className="absolute top-0 right-0 h-12  p-2">
                        <span className=" inline-flex items-center rounded-md bg-blue-600 px-2.5 py-0.5 text-sm font-medium text-blue-200">
                          {ticket.attendence}/{ticket.total}
                        </span>
                      </div>

                      <div className="absolute bottom-0  h-32 w-full bg-gradient-to-b from-transparent to-gray-500"></div>
                    </div>

                    <header className="relative -mt-36 flex flex-row items-center justify-between p-4 leading-tight md:p-6">
                      <div className="text-3xl">
                        <div className=""> {ticket.logo()}</div>
                        <h3 className="text-3xl font-bold  text-white no-underline line-clamp-2">
                          {ticket.title}
                        </h3>
                      </div>
                    </header>
                    <div className="-mt-4 px-6">
                      <p className="line-clamp-2">{ticket.description}</p>
                    </div>

                    <div className="py-4 pl-6">
                      <div className="flex items-center -space-x-2 overflow-hidden">
                        {ticket.avatars?.slice(0, 4).map((avatar, index) => {
                          return (
                            <img
                              key={index}
                              className="inline-block h-7 w-7 rounded-full object-cover ring-2 ring-gray-500"
                              src={avatar}
                              alt=""
                            />
                          );
                        })}
                        <p className="pl-5 text-sm text-gray-100">
                          +{ticket.attendence} members
                        </p>
                      </div>
                    </div>
                    <button
                      type="button"
                      disabled
                      className="w-full cursor-not-allowed items-center rounded-b-md border border-transparent bg-gray-700 px-9 py-4 text-base font-medium text-blue-300 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 "
                    >
                      Public sale soon
                    </button>
                  </article>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="relative  pt-16 lg:pb-32" id="platform">
          <div className="absolute z-0">
            <div
              className="media-gradient z-10"
              style={{
                position: "absolute",
                height: 300,
                width: 400,
                top: 500,
                left: 0,
                opacity: 0.85,
                background: "#26ae58",
              }}
            ></div>
            <div
              className="media-gradient hidden lg:block"
              style={{
                position: "absolute",
                height: 300,
                width: 400,
                bottom: -400,
                left: 1000,
                opacity: 0.7,
                background: "#26ae58",
              }}
            ></div>
          </div>

          <section className="py-6">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="relative overflow-hidden rounded-2xl bg-gray-900">
                <div className="p-8 sm:py-12 xl:p-16">
                  <h2 className="text-base font-semibold uppercase tracking-wider text-green-300">
                    PRIVATE BETA
                  </h2>
                  <h2 className="font-pj max-w-xl bg-gradient-to-br from-green-400 to-green-700 bg-clip-text text-4xl font-extrabold  text-transparent sm:text-5xl  lg:text-6xl">
                    Community marketplace
                  </h2>

                  <div className="mt-8 flex lg:mt-16 xl:mt-24">
                    <div className="w-full lg:w-1/3 xl:w-2/5 xl:py-8">
                      <ul className="space-y-12">
                        <li className="flex items-start">
                          <div className="font-pj inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-green text-base font-bold text-gray-900">
                            1
                          </div>
                          <div className="ml-6">
                            <p className="font-pj text-lg font-bold text-green">
                              Create a ticket
                            </p>
                            <p className="font-pj mt-4 text-base font-normal text-gray-50">
                              Lifetime access or burning ticket, sell tickets to
                              your community.
                            </p>
                          </div>
                        </li>

                        <li className="flex items-start">
                          <div className="font-pj inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-green text-base font-bold text-gray-900">
                            2
                          </div>
                          <div className="ml-6">
                            <p className="font-pj text-lg font-bold text-green">
                              Integrate
                            </p>
                            <p className="font-pj mt-4 text-base font-normal text-gray-50">
                              Use our wallet to connect your favourite apps like
                              Discord or{" "}
                              <a href="https://reason.fm">Reason.fm</a>.
                            </p>
                          </div>
                        </li>

                        <li className="flex items-start">
                          <div className="font-pj inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-green text-base font-bold text-gray-900">
                            3
                          </div>
                          <div className="ml-6">
                            <p className="font-pj text-lg font-bold text-green">
                              Resale tickets
                            </p>
                            <p className="font-pj mt-4 text-base font-normal text-gray-50">
                              Members can sell their tickets with a fee, access
                              gets passed to the new owner.
                            </p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="mt-4 mb-8 translate-x-8 lg:absolute lg:bottom-0 lg:right-0 lg:m-0 lg:translate-x-44 lg:translate-y-4 xl:translate-x-56">
                  <img
                    className="mx-auto w-full max-w-3xl rounded-md xl:max-w-4xl"
                    src="images/frame7.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* <dl className="mt-24 grid grid-cols-1 divide-y divide-green-800 overflow-hidden bg-green shadow md:grid-cols-3 md:divide-y-0 md:divide-x lg:rounded-lg">
          {stats.map((item) => (
            <div key={item.name} className="px-4 py-5 sm:p-6">
              <dt className="text-base font-normal text-gray-900">
                {item.name}
              </dt>
              <dd className="mt-1 flex items-baseline justify-between md:block lg:flex">
                <div className="flex items-baseline text-2xl font-semibold text-black">
                  {item.stat}
                </div>
              </dd>
            </div>
          ))}
        </dl> */}

        <div className="relative py-24" id="use-cases">
          <div className="absolute z-0">
            <div
              className="media-gradient z-10"
              style={{
                position: "absolute",
                height: 300,
                width: 400,
                top: 200,
                left: -200,
                opacity: 0.3,
                background: "#5438dc",
              }}
            ></div>
            <div
              className="media-gradient z-0 hidden lg:block"
              style={{
                position: "absolute",
                height: 300,
                width: 400,
                bottom: -400,
                left: 1000,
                opacity: 0.8,
                background: "#5438dc",
              }}
            ></div>
          </div>

          <div className="absolute bottom-0 h-80 w-full py-40 pl-10 xl:inset-0 xl:h-full">
            <div className="h-full w-full xl:grid xl:grid-cols-2">
              <div className="h-full xl:relative xl:col-start-2">
                <img
                  className="h-full w-full rounded-lg bg-blue-600 object-cover opacity-80 saturate-100 xl:absolute xl:inset-0"
                  src="images/metaverse.png"
                  alt="Metaverse"
                />
                {/* <div
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-900 xl:inset-y-0 xl:left-0 xl:h-full xl:w-32 xl:bg-gradient-to-r"
                /> */}
              </div>
            </div>
          </div>
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:max-w-7xl lg:px-8 xl:grid xl:grid-flow-col-dense xl:grid-cols-2 xl:gap-x-8">
            <div className="relative pt-12 pb-64 sm:pt-24 sm:pb-64 xl:col-start-1 xl:pb-24">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-indigo-300">
                Use cases
              </h3>
              <h2 className="font-pj bg-gradient-to-br  from-green-100 to-blue-400 bg-clip-text text-5xl font-extrabold  text-transparent sm:text-5xl  lg:text-6xl">
                Unlock the metaverse and more
              </h2>
              <p className="mt-5 text-lg text-white">
                With FanFirst tokens anyone can create a decentralised community
                free from a single platform. We have multiple integrations with
                platforms like Discord but you can also integrate FanFirst with
                Minecraft servers or other games.
              </p>
              <div className="mt-12 grid grid-cols-1 gap-y-12 gap-x-6 sm:grid-cols-2">
                {metrics.map((item) => (
                  <p key={item.id}>
                    <span className="block text-2xl font-bold text-white">
                      {item.stat}
                    </span>
                    <span className="mt-1 block text-base text-gray-50">
                      <span className="font-medium text-white">
                        {item.emphasis}
                      </span>{" "}
                      {item.rest}
                    </span>
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="-mt-60 overflow-hidden py-24 lg:mt-0">
          <div className="absolute z-0 ">
            <div
              className="media-gradient z-10 hidden lg:block"
              style={{
                position: "absolute",
                height: 300,
                width: 400,
                top: 0,
                left: 0,
                opacity: 0.35,
                background: "#26ae58",
              }}
            ></div>
            <div
              className="media-gradient hidden lg:block"
              style={{
                position: "absolute",
                height: 300,
                width: 400,
                bottom: -200,
                left: 1000,
                opacity: 0.2,
                background: "#26ae58",
              }}
            ></div>
          </div>

          <div
            className="relative mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8"
            id="community"
          >
            <svg
              className="absolute top-0 left-full -translate-x-1/2 -translate-y-3/4 transform lg:left-auto lg:right-full lg:translate-x-2/3 lg:translate-y-1/4"
              width={404}
              height={784}
              fill="none"
              viewBox="0 0 404 784"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="8b1b5f72-e944-4457-af67-0c6d15a99f38"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-green-300 opacity-10"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={784}
                fill="url(#8b1b5f72-e944-4457-af67-0c6d15a99f38)"
              />
            </svg>

            <div className="relative lg:grid lg:grid-cols-3 lg:gap-x-8">
              <div className="lg:col-span-1">
                <h2 className="font-pj bg-gradient-to-br  from-green-100 to-green-400 bg-clip-text text-5xl font-extrabold  text-transparent sm:text-5xl  lg:text-6xl">
                  Join our fast growing community
                </h2>
              </div>
              <dl className="mt-10 space-y-10 sm:grid sm:grid-cols-3 sm:gap-x-8 sm:gap-y-10 sm:space-y-0 lg:col-span-2 lg:mt-0 lg:pl-6">
                {communities.map((feature, index) => (
                  <a href={feature.link} key={index}>
                    <div className="cursor-pointer">
                      <dt>
                        <div className="flex h-12 w-12 items-center justify-center rounded-md border border-gray-500 bg-gray-600 text-white shadow-lg">
                          <feature.icon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        </div>
                        <p className="mt-5 flex items-center text-xl font-medium leading-6 text-white underline">
                          {feature.name}{" "}
                          <ArrowRightIcon className="ml-2 h-4 w-4" />
                        </p>
                      </dt>
                      <dd className="mt-2 text-base text-gray-50">
                        {feature.description}
                      </dd>
                    </div>
                  </a>
                ))}
              </dl>
            </div>
          </div>
        </div>

        <div className="-mt-40 py-24 lg:mt-0">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-16 lg:px-8">
            <div className="rounded-3xl  bg-gradient-to-r from-green-500 to-green-700 py-10 px-6 sm:py-16 sm:px-12 lg:flex lg:items-center lg:p-20">
              <div className="lg:w-0 lg:flex-1">
                <h2 className="text-4xl font-extrabold tracking-tight text-black">
                  Early access and token presale
                </h2>
                <p className="mt-4 max-w-3xl text-lg text-gray-800">
                  For more information, integrations and access to the token
                  presale.
                </p>
              </div>
              <div className="mt-12 sm:w-full sm:max-w-md lg:mt-0 lg:ml-8 lg:flex-1">
                <div className="mt-0 flex ">
                  <Link href="https://fanfirst.typeform.com/to/wXGIkF3D">
                    <a className="group relative  inline-flex w-full">
                      <div className="transitiona-all animate-tilt absolute -inset-px w-full rounded-full bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] opacity-50 blur-lg duration-1000 group-hover:-inset-1 group-hover:opacity-100 group-hover:duration-200"></div>

                      <div className="font-pj relative inline-flex w-full items-center justify-center rounded-full bg-white px-7 py-5 text-xl font-bold text-black transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2">
                        Get early acccess
                        <ArrowRightIcon className="ml-2 h-5 w-5" />
                      </div>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
