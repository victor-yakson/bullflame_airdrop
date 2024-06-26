import React, { useContext } from "react";
import { useRouter } from "next/router";

//INTERNAL IMPORT
import {
  Banner,
  Document,
  Footer,
  Header,
  Verify,
  Loader,
  Scrollup,
  NoPage,
  Referal,
} from "../components/index";
import { CONTEXT } from "../context/index";

const airdrop = () => {
  const { loader, airdropBalance } = useContext(CONTEXT);
  console.log(airdropBalance);
  return (
    <>
      {airdropBalance == 0 ? (
        <NoPage title={"Airdrop is Closed"} />
      ) : (
        <div>
          <Header />
          <main>
            <Banner
              title={"Airdrop"}
              type={"Claim"}
              action={"Fee Airdrop Tokens"}
            />
                        <Referal/>

            <Verify />
            <Document />
          </main>
          <Footer />

          {loader && (
            <div className="new_loader">
              <Loader />
            </div>
          )}
          <Scrollup />
        </div>
      )}
    </>
  );
};

export default airdrop;
