import React from "react";

function feature() {
  return (
    <div className="h-[1016px] w-full pb-40 mx-auto md:pb-5 md:p-5 relative max-w-7xl">
      <div className="flex flex-col w-full gap-14 bottom-[16%] right-0 left-0 m-auto sm:gap-7 absolute">
        <div className="flex flex-col items-center">
          <Heading as="h6" className="capitalize text-center z-[1]">
            Familiar and Secure
          </Heading>
          <div className="flex self-stretch justify-center items-end h-[160px] md:h-auto mt-[-68px] p-14 md:p-5 relative bg-[url(/public/images/img_group_2.svg)] bg-cover bg-no-repeat">
            <Text
              size="md"
              as="p"
              className="mt-6 !text-white-A700_7a text-center"
            >
              One click to migrate all your VSCode extensions with privacy
              options for security-critical work.
            </Text>
          </div>
        </div>
        <div className="flex md:flex-col w-[98%] md:w-full gap-10">
          <div className="flex w-full bg-gradient2 rounded-[24px]">
            <div className="h-[476px] w-full pb-10 pl-10 sm:pb-5 sm:pl-5 bg-gray-900_03 relative rounded-[24px]">
              <Img
                src="images/img_svg_351x325.png"
                alt="svg_one"
                className="h-[351px] w-[58%] right-[0.00px] top-[0.00px] m-auto object-cover absolute"
              />
              <div className="flex sm:flex-col justify-between items-start w-[93%] left-[7%] top-[8%] gap-5 m-auto absolute sm:relative">
                <div className="flex flex-col items-center bg-gradient5 rounded-[12px]">
                  <Button
                    size="md"
                    shape="round"
                    className="w-[48px] !rounded-[10px]"
                  >
                    <Img src="images/img_div_h_12.svg" />
                  </Button>
                </div>
                <div className="sm:self-stretch pl-8 sm:pl-5 flex-1">
                  <div className="flex flex-col items-start gap-3.5">
                    <Text size="lg" as="p" className="!text-white-A700">
                      One-click migration
                    </Text>
                    <div className="self-stretch mb-7 pr-[18px]">
                      <Text as="p" className="!font-medium leading-6">
                        <>
                          Cursor is a fork of VSCode. Import all your
                          extensions,
                          <br />
                          themes, and keybindings in one click.
                        </>
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-full bg-gradient2 rounded-[24px]">
            <div className="h-[476px] w-full pb-10 pl-10 sm:pb-5 sm:pl-5 bg-gray-900_03 relative rounded-[24px]">
              <Img
                src="images/img_svg_351x325.png"
                alt="svg_one"
                className="h-[351px] w-[58%] right-[0.00px] top-[0.00px] m-auto object-cover absolute"
              />
              <div className="flex sm:flex-col justify-between items-start w-[93%] left-[7%] top-[8%] gap-5 m-auto absolute sm:relative">
                <div className="flex flex-col items-center bg-gradient5 rounded-[12px]">
                  <Button
                    size="md"
                    shape="round"
                    className="w-[48px] !rounded-[10px]"
                  >
                    <Img src="images/img_location.svg" />
                  </Button>
                </div>
                <div className="sm:self-stretch pl-8 sm:pl-5 flex-1">
                  <div className="flex flex-col items-start gap-3.5">
                    <Text size="lg" as="p" className="!text-white-A700">
                      Keep your code private
                    </Text>
                    <div className="self-stretch mb-7 pr-6 sm:pr-5">
                      <Text as="p" className="!font-medium leading-6">
                        <>
                          With privacy mode, we store none of your code in our
                          <br />
                          servers or logs.
                        </>
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Img
        src="images/img_image_600x1000.png"
        alt="image_thirtyone"
        className="h-[600px] w-[78%] top-[0.00px] right-0 left-0 m-auto object-cover absolute"
      />
    </div>
  );
}

export default feature;
