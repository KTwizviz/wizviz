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
  return (
    <div className="grid grid-cols-4 gap-5">
      <div className="border border-ELSE-7374 flex items-center justify-center p-4">
        <Image
          src={Sponsor_bccard_img}
          alt={"Sponsor_bccard"}
          width={200}
          height={100}
        />
      </div>
      <div className="border border-ELSE-7374 flex items-center justify-center p-4">
        <Image
          src={Sponsor_suwon_img}
          alt={"Sponsor_suwon"}
          width={200}
          height={100}
        />
      </div>
      <div className="border border-ELSE-7374 flex items-center justify-center p-4">
        <Image
          src={Sponsor_daishin_img}
          alt={"Sponsor_daishin"}
          width={200}
          height={100}
        />
      </div>
      <div className="border border-ELSE-7374 flex items-center justify-center p-4">
        <Image
          src={Sponsor_newbalance_img}
          alt={"Sponsor_newbalance"}
          width={200}
          height={100}
        />
      </div>
      <div className="border border-ELSE-7374 flex items-center justify-center p-4">
        <Image
          src={Sponsor_panasonic_img}
          alt={"Sponsor_panasonic"}
          width={200}
          height={100}
        />
      </div>
      <div className="border border-ELSE-7374 flex items-center justify-center p-4">
        <Image
          src={Sponsor_usana_img}
          alt={"Sponsor_usana"}
          width={200}
          height={100}
        />
      </div>
      <div className="border border-ELSE-7374 flex items-center justify-center p-4">
        <Image
          src={Sponsor_oksavingsbank_img}
          alt={"Sponsor_oksavingsbank"}
          width={200}
          height={100}
        />
      </div>
      <div className="border border-ELSE-7374 flex items-center justify-center p-4">
        <Image
          src={Sponsor_ktestate_img}
          alt={"Sponsor_ktestate"}
          width={200}
          height={100}
        />
      </div>
      <div className="border border-ELSE-7374 flex items-center justify-center p-4">
        <Image
          src={Sponsor_dongsuh_img}
          alt={"Sponsor_dongsuh"}
          width={200}
          height={100}
        />
      </div>
      <div className="border border-ELSE-7374 flex items-center justify-center p-4">
        <Image
          src={Sponsor_nongshim_img}
          alt={"Sponsor_nongshim"}
          width={200}
          height={100}
        />
      </div>
      <div className="border border-ELSE-7374 flex items-center justify-center p-4">
        <Image
          src={Sponsor_samsung_img}
          alt={"Sponsor_samsung"}
          width={200}
          height={100}
        />
      </div>
      <div className="border border-ELSE-7374 flex items-center justify-center p-4">
        <Image
          src={Sponsor_ticketlink_img}
          alt={"Sponsor_ticketlink"}
          width={200}
          height={100}
        />
      </div>
      <div className="border border-ELSE-7374 flex items-center justify-center p-4">
        <Image
          src={Sponsor_tirebank_img}
          alt={"Sponsor_tirebank"}
          width={200}
          height={100}
        />
      </div>
      <div className="border border-ELSE-7374 flex items-center justify-center p-4">
        <Image
          src={Sponsor_dorco_img}
          alt={"Sponsor_dorco"}
          width={200}
          height={100}
        />
      </div>
      <div className="border border-ELSE-7374 flex items-center justify-center p-4">
        <Image
          src={Sponsor_sangsangin_img}
          alt={"Sponsor_sangsangin"}
          width={200}
          height={100}
        />
      </div>
      <div className="border border-ELSE-7374 flex items-center justify-center p-4">
        <Image
          src={Sponsor_onface_img}
          alt={"Sponsor_onface"}
          width={200}
          height={100}
        />
      </div>
    </div>
  );
};
