use crate::{Alignment, Attribute, Data, Size, Speed};

pub(crate) enum Sources<S: Into<String>> {
    PlayersHandbook(Info<S>),
    ExplorersGuideToWildemount,
    FizbansTreasuryOfDragons,
    UnearthedArcana,
}

pub(crate) struct Info<S: Into<String>> {
    summary: Option<S>,
    asi: Vec<Attribute>,
    age: S,
    alignment: Data<S, Alignment>,
    size: Data<S, Size>,
    speed: Speed,
    draconic_ancestry: DraconicAncestry<S>,
}

enum DraconicAncestry<S: Into<String>> {
    Black(BreathInfo<S>),
    Blue(BreathInfo<S>),
    Brass(BreathInfo<S>),
    Bronze(BreathInfo<S>),
    Copper(BreathInfo<S>),
    Gold(BreathInfo<S>),
    Green(BreathInfo<S>),
    Red(BreathInfo<S>),
    Silver(BreathInfo<S>),
    White(BreathInfo<S>),
}

enum DamageType {
    Acid,
    Lightning,
    Fire,
    Poison,
    Cold,
}

struct BreathInfo<S: Into<String>> {
    damage_type: DamageType,
    breath_weapon: S,
}
