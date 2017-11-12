import {Deployer} from './../src/deployer';

/**
 * Custom migrations should be defined in this function. This will be called with the CLI 'migrate' command.
 * @param deployer Deployer instance.
 */
export async function runMigrationsAsync(deployer: Deployer): Promise<void> {
    // Placeholder for full migrations
    await deployer.deployAsync('EtherToken', []);
}
