export type Nullable<T> = T | null | undefined;

export type MakeOptional<T> = {
	[Key in keyof T]?: T[Key];
};

export type ExtendPropertyType<T, Key extends keyof T, ExtendedType> = {
	[Property in keyof T]: Property extends Key ? T[Property] | ExtendedType : T[Property];
};
