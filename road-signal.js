{
  let decision = "";

  let signalFunction = function (signal) {
    if (signal == "red") {
      decision = "Danger";
    } else if (signal == "yellow") {
      decision = "Should not cross";
    } else {
      decision = "Should cross";
    }
    return decision;
  };

  let signal = "yellow";
  console.log(signalFunction(signal));
}

{
  let signalFunction = (signal) =>
    signal == "red"
      ? "Danger"
      : signal == "yellow"
      ? "Shouldn't Cross"
      : "Should Cross";
  console.log(signalFunction("green"));
}

{
  let signalFunction = (signal) => {
    let decision = "";
    switch (signal) {
      case "red":
        decision = "Danger.";
        break;
      case "yellow":
        decision = "Should not Cross.";
        break;
      default:
        decision = "Should Cross.";
    }
    return decision;
  };
  console.log(signalFunction("red"));
}

{
  function signalFunction(signal) {
    switch (signal) {
      case "red":
        return "Danger.";
      case "yellow":
        return "Should not Cross.";
      default:
        return "Should Cross.";
    }
  }
  console.log(signalFunction("yellow"));
}
