function typeKnown(date: unknown) {
  if (
    date != null &&
    date != undefined &&
    typeof date == "object" &&
    "name" in date &&
    typeof date.name == "string"
  ) {
    console.log(date.name);
  }
}
