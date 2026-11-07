function calculate(answered, short, long) {
  const offered = answered + short + long;
  const eligible = answered + long;
  return {offered, gross: offered ? (short + long) / offered : null,
    adjusted: eligible ? long / eligible : null};
}
