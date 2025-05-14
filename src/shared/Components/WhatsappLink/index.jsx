import React, { useState } from "react";
import { ClipLoader } from "react-spinners";
import Styles from "@/shared/Components/whatsappLink/whatsappLink.module.scss";

function WhatsappLink({ image }) {
  const [loading, setLoading] = useState(false);

  const handleClickWhatsapp = () => {
    if (loading) return;
    setLoading(true);
    const phone = "994501112233"; // '+' işareti kaldırıldı
    const url = `https://wa.me/${phone}`;

    setTimeout(() => {
      window.open(url, "_blank", "noopener,noreferrer");
      setLoading(false);
    }, 2000);
  };

  return (
    <div className={Styles.whatsappLinkContainer}>
      <div className={Styles.whatsappButton} onClick={handleClickWhatsapp}>
        {!loading ? (
          <div>
            <img src={image} alt="wp-icon" />
          </div>
        ) : (
          <ClipLoader color="#0bee36" size={50} speedMultiplier={0.5} />
        )}
      </div>
    </div>
  );
}

export default WhatsappLink;
