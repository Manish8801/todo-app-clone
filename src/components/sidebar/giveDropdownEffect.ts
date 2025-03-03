const dropdownEffect = (
  isOpen: boolean,
  dropdownListContainer: HTMLDivElement
) => {
  const { scrollHeight } = dropdownListContainer;
  if (isOpen) {
    dropdownListContainer.animate(
      [{ offset: 1, height: scrollHeight + "px" }],
      {
        duration: 200,
        delay: 0,
        easing: "ease-out",
        fill: "forwards",
      }
    );
  } else {
    dropdownListContainer.animate([{ offset: 1, height: 0 }], {
      duration: 200,
      delay: 0,
      easing: "ease-out",
      fill: "forwards",
    });
  }
};
export default dropdownEffect;
