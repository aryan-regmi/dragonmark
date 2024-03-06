mod races;

pub(crate) struct Data<Frontend, Backend> {
    front: Frontend,
    back: Backend,
}

pub(crate) enum Attribute {
    Strength(u8),
    Dexterity(u8),
    Constitution(u8),
    Intelligence(u8),
    Wisdom(u8),
    Charisma(u8),
}

pub(crate) enum Alignment {
    LawfulGood,
    NeutralGood,
    ChaoticGood,
    LawfulNeutral,
    TrueNeutral,
    ChaoticNeutral,
    LawfulEvil,
    NeutralEvil,
    ChaoticEvil,
}

pub(crate) enum Size {
    Small,
    Medium,
    Large,
}

pub(crate) enum Speed {
    Walking(u8),
    Flying(u8),
    Swimming(u8),
    Climbing(u8),
}
