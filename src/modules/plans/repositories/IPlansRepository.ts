interface IPlansRepository {
  create(description: string): Promise<void>;
}

export { IPlansRepository };
