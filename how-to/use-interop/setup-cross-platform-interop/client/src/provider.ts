import { InteropBroker } from 'openfin-adapter/src/api/interop';
import { fin } from 'openfin-adapter/src/mock';

const p = document.querySelector('#uuid');
p.innerHTML = `${fin.me.uuid} provider`;

const interopOverride = async (InteropBroker, provider, options, ...args) => {
    class Override extends InteropBroker {
        constructor(provider, options, ...args) {
            super(provider, options, ...args);
            // this.externalBrokers = ['platform_customization_local-2'];
            // this.externalClients = new Map();
            // this.initializeBrokers();
        }

        // async initializeBrokers() {
            // this.externalBrokers.forEach(async (brokerUuid) => {
            //     const tempClient = fin.Interop.connectSync(brokerUuid);
            //     const app = fin.Application.wrapSync({ uuid: brokerUuid });
    
            //     if (tempClient.isRunning) {
            //         await this.setupContextGroups(tempClient, brokerUuid);
            //     }
                
            //     const listener = async (channelPayload) => {
            //         if (channelPayload.channelName === `interop-broker-${brokerUuid}`) {
            //             await this.setupContextGroups(tempClient, brokerUuid);
            //         }
            //     };

            //     fin.InterApplicationBus.Channel.onChannelConnect(listener);
        
            //     app.once('closed', () => {
            //         this.externalClients.delete(brokerUuid);
            //     });
            // });
        // }

        // async setupContextGroups(client, brokerUuid) {
        //     const contextGroups = await client.getContextGroups();
        //     const colorClientsMap = new Map();

        //     contextGroups.forEach(async (ctxGrpInfo) => {
        //         const colorClient = fin.Interop.connectSync(brokerUuid);
        //         await colorClient.joinContextGroup(ctxGrpInfo.id);

        //         await colorClient.addContextHandler(async (context) => {
        //             const tempClient = fin.Interop.connectSync(fin.me.uuid);
        //             await tempClient.joinContextGroup(ctxGrpInfo.id);
        //             tempClient.setContext(context);
        //         });

        //         colorClientsMap.set(ctxGrpInfo.id, colorClient);
        //     });

        //     this.externalClients.set(brokerUuid, colorClientsMap);
        // }

        // async setContext(payload, clientIdentity) {
        //     const { context } = payload;

        //     if (this.externalClients.size > 0) {
        //         const state = this.getClientState(clientIdentity);
                
        //         this.externalClients.forEach((colorClientsMap) => {
        //             if (colorClientsMap.has(state.contextGroupId)) {
        //                 const colorClient = colorClientsMap.get(state.contextGroupId);
        //                 colorClient.setContext(context);
        //             }
        //         });
        //     }

        //     super.setContext(payload, clientIdentity);
        // }
    }

    return new Override(provider, options, ...args) as InteropBroker;
}

const platformConfig = fin.me.uuid === 'platform-1' ? { interopOverride } : null;

fin.Platform.init(platformConfig);
