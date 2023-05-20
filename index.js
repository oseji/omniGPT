"use strict";
const featuresGroup = document.querySelector(".featuresGrp");
const allFeatures = document.querySelectorAll(".feature");
const allFeatureText = document.querySelectorAll(".featureText");
const featureText1 = document.getElementById("featureText-1");
const featureText2 = document.getElementById("featureText-2");
const featureText3 = document.getElementById("featureText-3");
const featureText4 = document.getElementById("featureText-4");

const navbar = document.querySelector(".navbar");
const navList = document.querySelector(".navList ");

console.log(navbar, navList);

//CODE

//opening and closing mobile nav
navbar.addEventListener("click", (e) => {
  const click = e.target;

  console.log(click);

  if (click.classList.contains("hamburger")) {
    console.log("this is the menu");

    navList.classList.toggle("closedNav");
    navList.classList.toggle("openNav");
  }
});

//opening features
featuresGroup.addEventListener("click", (e) => {
  const click = e.target;
  const feature = click.closest(".feature");
  console.log(click, feature);

  allFeatures.forEach((feature) => {
    feature.classList.remove("activeFeature");
  });

  allFeatureText.forEach((text) => {
    text.classList.remove("openedText");
    text.classList.add("closedText");
  });

  if (feature.id == "feature-1") {
    console.log("this is the first feature");

    featureText1.classList.remove("closedText");
    featureText1.classList.add("openedText");
    feature.classList.toggle("activeFeature");
  } else if (feature.id == "feature-2") {
    console.log("this is the second feature");

    featureText2.classList.remove("closedText");
    featureText2.classList.add("openedText");
    feature.classList.toggle("activeFeature");
  } else if (feature.id == "feature-3") {
    console.log("this is the third feature");

    featureText3.classList.remove("closedText");
    featureText3.classList.add("openedText");
    feature.classList.toggle("activeFeature");
  } else if (feature.id == "feature-4") {
    console.log("this is the fourth feature");

    featureText4.classList.remove("closedText");
    featureText4.classList.add("openedText");
    feature.classList.toggle("activeFeature");
  }
});
