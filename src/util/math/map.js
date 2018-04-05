export default function map(value, minA, maxA, minB, maxB){

    return (value - minA) / (maxA - minA) * (maxB - minB) + minB;
};