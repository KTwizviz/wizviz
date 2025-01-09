import Image from "next/image";
import {
  Sponsor_bccard_img,
  Sponsor_suwon_img,
  Sponsor_daishin_img,
  Sponsor_newbalance_img,
  Sponsor_dongsuh_img,
  Sponsor_usana_img,
  Sponsor_oksavingsbank_img,
  Sponsor_ktestate_img,
  Sponsor_panasonic_img,
  Sponsor_nongshim_img,
  Sponsor_samsung_img,
  Sponsor_ticketlink_img,
  Sponsor_dorco_img,
  Sponsor_sangsangin_img,
  Sponsor_tirebank_img,
  Sponsor_onface_img,
} from "@/assets/images/@index";

export const SponsorItem = () => {
  const sponsors = [
    { src: Sponsor_bccard_img, alt: "Sponsor_bccard" },
    { src: Sponsor_suwon_img, alt: "Sponsor_suwon" },
    { src: Sponsor_daishin_img, alt: "Sponsor_daishin" },
    { src: Sponsor_newbalance_img, alt: "Sponsor_newbalance" },
    { src: Sponsor_panasonic_img, alt: "Sponsor_panasonic" },
    { src: Sponsor_usana_img, alt: "Sponsor_usana" },
    { src: Sponsor_oksavingsbank_img, alt: "Sponsor_oksavingsbank" },
    { src: Sponsor_ktestate_img, alt: "Sponsor_ktestate" },
    { src: Sponsor_dongsuh_img, alt: "Sponsor_dongsuh" },
    { src: Sponsor_nongshim_img, alt: "Sponsor_nongshim" },
    { src: Sponsor_samsung_img, alt: "Sponsor_samsung" },
    { src: Sponsor_ticketlink_img, alt: "Sponsor_ticketlink" },
    { src: Sponsor_tirebank_img, alt: "Sponsor_tirebank" },
    { src: Sponsor_dorco_img, alt: "Sponsor_dorco" },
    { src: Sponsor_sangsangin_img, alt: "Sponsor_sangsangin" },
    { src: Sponsor_onface_img, alt: "Sponsor_onface" },
  ];

  return (
    <div className="grid grid-cols-4 gap-5">
      {sponsors.map((sponsor, name) => (
        <div
          key={name}
          className="border border-ELSE-7374 flex items-center justify-center p-4"
        >
          <Image src={sponsor.src} alt={sponsor.alt} width={200} height={100} />
        </div>
      ))}
    </div>
  );
};
