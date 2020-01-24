import jQuery from 'jquery';

var exports = module.exports = {};

exports.utils = {};

exports.utils.calcLeftSpacePercentageMe = () => {
  const windowInnerWidth = jQuery(window).innerWidth();
  if (windowInnerWidth <= 320) {
    return '-40%';
  } else if (windowInnerWidth <= 360) {
    return '-45%';
  } else if (windowInnerWidth <= 414) {
    return '-40%';
  } else if (windowInnerWidth <= 480) {
    return '-35%';
  } else if (windowInnerWidth <= 640) {
    return '-5%';
  } else if (windowInnerWidth <= 768) {
    return '-2%';
  } else if (windowInnerWidth <= 1024) {
    return '-0.5%';
  } else {
    return '0%';
  }
};

exports.utils.calcLeftSpacePercentageDoor = () => {
  const windowInnerWidth = jQuery(window).innerWidth();
  if (windowInnerWidth <= 320) {
    return ['-100%', '-60%'];
  } else if (windowInnerWidth <= 360) {
    return ['-100%', '-60%'];
  } else if (windowInnerWidth <= 414) {
    return ['-100%', '-55%'];
  } else if (windowInnerWidth <= 480) {
    return ['-100%', '-45%'];
  } else if (windowInnerWidth <= 640) {
    return ['-50%', '-15%'];
  } else if (windowInnerWidth <= 768) {
    return ['-30%', '-10%'];
  } else if (windowInnerWidth <= 1024) {
    return ['-30%', '-6%'];
  } else {
    return ['-30%', '-4%'];
  }
};
