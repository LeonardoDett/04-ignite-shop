import { styled } from "..";

export const HomeContainer = styled("main", {
  display: "flex",

  marginLeft: "auto",

  maxWidth: "calc(100vw - ((100vw - 1180px) / 2))",
  minHeight: "656px",
});

export const Product = styled("a", {
  background: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",
  borderRadius: 8,
  padding: "0.25rem",
  cursor: "pointer",
  position: "relative",

  height: 520,

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  overflow: "hidden",

  img: {
    objectFit: "cover",
  },
  footer: {
    position: "absolute",
    bottom: "0.25rem",
    left: "0.25rem",
    right: "0.25rem",
    borderRadius: 6,
    padding: "2rem",

    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    backgroundColor: "rgba(0,0,0, 0.6)",

    transform: "translateY(110%)",
    opacity: 0,
    transition: "all 0.2s ease-in-out",

    strong: {
      fontSize: "$lg",
      color: "$gray100",
    },

    span: {
      fontSize: "$xl",
      fontWeight: "bold",
      color: "$green300",
    },
  },

  "&:hover": {
    footer: {
      transform: "translateY(0%)",
      opacity: 1,
    },
  },
});
